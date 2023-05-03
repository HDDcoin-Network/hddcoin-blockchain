import type { Point } from '@hddcoin-network/api';
import { sumBy } from 'lodash';

function sumPoints(points: Point[]): number {
  return sumBy(points, (point) => point[1]) ?? 0;
}

export default function getPercentPointsSuccessfull(pointsAcknowledged: Point[], pointsFound: Point[]): number {
  const acknowledged = sumPoints(pointsAcknowledged);
  const found = sumPoints(pointsFound);

  if (!acknowledged || !found) {
    return 0;
  }

  return acknowledged / found;
}
