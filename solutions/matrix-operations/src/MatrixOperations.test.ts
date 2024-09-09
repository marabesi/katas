import { MatrixOperations } from './MatrixOperations'

describe('Matrix', () => {

  const base = [
    [1, 2, 3],
    [4, 5, 6],
  ];

  describe('rotation', () => {
    it('rotate clockwise once', () => {
      const matrix = new MatrixOperations(base);
  
      expect(matrix.turnClockwiseTimes(1)).toEqual([
        [6, 1, 2],
        [3, 4, 5],
      ]);
    });
  });

  describe('rotation with first item fixed', () => {
    it.each([
      [
        1,
        base,
        [
          [1, 6, 2],
          [3, 4, 5]
        ],
      ],
      [
        2,
        base,
        [
          [1, 5, 6],
          [2, 3, 4],
        ],
      ],
      [5, base, base]
    ])('rotate the same number as matrix combinations (times %s)', (times, input, output) => {
      const matrix = new MatrixOperations(input);

      expect(matrix.turnClockwiseFirstFixedTimes(times)).toEqual(output);
    });
  });
});
