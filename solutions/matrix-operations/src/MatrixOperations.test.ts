import { MatrixOperations } from './MatrixOperations'

describe('Matrix', () => {
  
  it('rotate clockwise once', () => {
    const matrix = new MatrixOperations([
      [1, 2, 3],
      [4, 5, 6],
    ]);

    expect(matrix.turnClockwiseTimes(1)).toEqual([
      [6, 1, 2],
      [3, 4, 5],
    ]);
  });

  it('rotate clockwise once keeping the first item static', () => {
    const matrix = new MatrixOperations([
      [1, 2, 3],
      [4, 5, 6],
    ]);

    expect(matrix.turnClockwiseFirstFixedTimes(1)).toEqual([
      [1, 6, 2], [3, 4, 5],
    ]);
  });
});
