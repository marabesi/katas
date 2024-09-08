import { MatrixOperations } from './MatrixOperations'

describe('Matrix', () => {
  
  it('create a matrix', () => {
    const matrix = new MatrixOperations([
      [1, 2, 3],
      [4, 5, 6],
    ]);

    expect(matrix.turnClockwiseOnce()).toEqual([
      [6, 1, 2,],
      [3, 4, 5],
    ]);
  });
});
