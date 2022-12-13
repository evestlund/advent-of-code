const alphabet = 'SabcdefghijklmnopqrstuvwxyzE';

export function a(input) {
  const graph = createGraph(input)

  let start, stop;

  for (let y = 0; y < input.length; y++) {
    const row = input[y];

    for (let x = 0; x < row.length; x++) {

      if (row[x] === 'S') start = `${x}-${y}`
      if (row[x] === 'E') stop = `${x}-${y}`
    }
  }

  const path = graph.Dijkstra(start, stop);

  return path.length - 1;
}

export function b(input) {
  const graph = createGraph(input)

  const starts = [];
  let stop;

  for (let y = 0; y < input.length; y++) {
    const row = input[y];

    for (let x = 0; x < row.length; x++) {

      if (row[x] === 'a') starts.push(`${x}-${y}`);
      if (row[x] === 'E') stop = `${x}-${y}`;
    }
  }

  const results = [];
  for (let i = 0; i < starts.length; i++) {
    const result = graph.Dijkstra(starts[i], stop);
    if (result.length !== 1) results.push(result.length - 1);
  }

  return results.sort((a, b) => a - b)[0]
}

function createGraph(rows) {
  const columns = transpose(rows);

  var graph = new WeightedGraph();

  for (let y = 0; y < rows.length; y++) {
    const row = rows[y];

    for (let x = 0; x < columns.length; x++) {

      graph.addVertex(`${x}-${y}`);
    }
  }

  for (let y = 0; y < rows.length; y++) {
    const row = rows[y];

    for (let x = 0; x < columns.length; x++) {
      const column = columns[x];

      const currentLetterScore = alphabet.indexOf(row[x]);

      const left = x > 0 ? row[x - 1] : false
      const right = x < row.length - 1 ? row[x + 1] : false

      const over = y > 0 ? column[y - 1] : false
      const under = y < column.length - 1 ? column[y + 1] : false

      // left
      if (left && alphabet.indexOf(left) <= currentLetterScore + 1) {
        // console.log('connected to left');
        graph.addEdge(`${x}-${y}`, `${x - 1}-${y}`, 1);
      }
      // right
      if (right && alphabet.indexOf(right) <= currentLetterScore + 1) {
        // console.log('connected to right', `${x}-${y}`, `${x + 1}-${y}`);
        graph.addEdge(`${x}-${y}`, `${x + 1}-${y}`, 1);
      }

      // over
      if (over && alphabet.indexOf(over) <= currentLetterScore + 1) {
        // console.log('connected to over', `${x}-${y}`, `${x}-${y - 1}`);
        graph.addEdge(`${x}-${y}`, `${x}-${y - 1}`, 1);
      }
      // under
      if (under && alphabet.indexOf(under) <= currentLetterScore + 1) {
        // console.log('connected to under');
        graph.addEdge(`${x}-${y}`, `${x}-${y + 1}`, 1);
      }
    }
  }

  return graph;
}

//Dijkstra algorithm is used to find the shortest distance between two nodes inside a valid weighted graph. Often used in Google Maps, Network Router etc.

//helper class for PriorityQueue
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

//Dijkstra's algorithm only works on a weighted graph.

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    // this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; //to return at end
    let smallest;
    //build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        //WE ARE DONE
        //BUILD UP PATH TO RETURN AT END
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          //calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}


function transpose(matrix) {
  return matrix.reduce((prev, next) => next.map((item, i) =>
    (prev[i] || []).concat(next[i])
  ), []);
}
