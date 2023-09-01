import {GameOfLife, Output} from './GameOfLife'

class MockedOutput implements Output {
  write(argument: any): void {}
}

const mockedOutput = new MockedOutput();

describe('Game of life', () => {
  const verify = jest.spyOn(mockedOutput, 'write')

  it('all cells should be dead when given board is empty', () => {
    const board = [
      [0,0],
      [0,0],
    ];

    const game = new GameOfLife(board, mockedOutput)
    game.nextGen()

    expect(verify).toHaveBeenCalledWith([
      [0,0],
      [0,0],
    ])
  })

  it.each(
      [
          [
            [
              [1,0],
              [0,0],
            ],
            [
              [0,0],
              [0,0],
            ]
          ],
        [
          [
            [0,1],
            [0,0],
          ],
          [
            [0,0],
            [0,0],
          ]
        ],
        [
          [
            [0,0],
            [1,0],
          ],
          [
            [0,0],
            [0,0],
          ]
        ],
        [
          [
            [0,0],
            [0,1],
          ],
          [
            [0,0],
            [0,0],
          ]
        ]
      ]
  )('Any live cell with fewer than two live neighbours dies', (input: number[][], output: number[][]) => {
    const game = new GameOfLife(input, mockedOutput)
    game.nextGen()

    expect(verify).toHaveBeenCalledWith(output)
  })
})

describe('acceptance Game of life', () => {
  it('should trigger next gen', () => {
    const board = [
        [0,0],
        [0,0],
    ];
    const game = new GameOfLife(board, mockedOutput)
    game.nextGen()
  })
})
