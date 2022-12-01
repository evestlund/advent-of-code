export function a(measurements) {
  let numberOfIncreasingMeasurements = 0;

  for (let i = 1; i < measurements.length; i += 1) {
    if (measurements[i - 1] < measurements[i]) numberOfIncreasingMeasurements += 1;
  }

  return numberOfIncreasingMeasurements;
}

export function b(measurements) {
  let numberOfIncreasingSlidingMeasurements = 0;

  for (let i = 0; i < measurements.length - 3; i += 1) {
    const slidingMeasurmentGroupA = measurements[i] + measurements[i + 1] + measurements[i + 2];
    const slidingMeasurmentGroupB = measurements[i + 1] + measurements[i + 2] + measurements[i + 3];

    if (slidingMeasurmentGroupA < slidingMeasurmentGroupB) numberOfIncreasingSlidingMeasurements += 1;
  }

  return numberOfIncreasingSlidingMeasurements;
}
