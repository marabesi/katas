import { MarsRover } from './MarsRover'
import { Grid } from './Grid'

const grid: Grid = new Grid(10, 10)

describe('Rover behavior', () => {
  it.each([
    [ 'M', '0:1:N' ],
    [ 'MM', '0:2:N' ],
    [ 'MMM', '0:3:N' ],
    [ 'MMMM', '0:4:N' ],
    [ 'MMMMM', '0:5:N' ],
    [ 'MMMMMM', '0:6:N' ],
    [ 'MMMMMMM', '0:7:N' ],
    [ 'MMMMMMMMMM', '0:0:N' ],
  ])('moves rover in the X axis towards NORTH (command %s, expected to be at %s)', (coordinates, expected) => {
    const rover = new MarsRover(grid);

    expect(rover.execute(coordinates)).toEqual(expected)
  })

  it.each([
    [ 'MMMMMMMMMRRMM', '0:7:S' ],
    [ 'MMRRMM', '0:0:S' ],
  ])('moves rover in the Y axis towards SOUTH (command %s, expected to be at %s)', (coordinates, expected) => {
    const rover = new MarsRover(grid);

    expect(rover.execute(coordinates)).toEqual(expected)
  })

  it.each([
    [ 'RM', '1:0:E' ],
    [ 'RMM', '2:0:E' ],
    [ 'RMMM', '3:0:E' ],
    [ 'RMMMMMMMMMM', '0:0:E' ],
  ])('moves rover in the X axis towards EAST (command %s, expected to be at %s)', (coordinates, expected) => {
    const rover = new MarsRover(grid);

    expect(rover.execute(coordinates)).toEqual(expected)
  })

  it.each([
    [ 'RMMMMMLLMM', '3:0:W' ],
    [ 'RMMMMMLLMMMMM', '0:0:W' ],
  ])('moves rover in the X axis towards WEST (command %s, expected to be at %s)', (coordinates, expected) => {
    const rover = new MarsRover(grid);

    expect(rover.execute(coordinates)).toEqual(expected)
  })

  it.each([
    [ 'R', '0:0:E' ],
    [ 'RR', '0:0:S' ],
    [ 'RRR', '0:0:W' ],
    [ 'RRRR', '0:0:N' ],
  ])('rotates the rover to the right (R command)', (coordinates, expected) => {
    const rover = new MarsRover(grid);

    expect(rover.execute(coordinates)).toEqual(expected)
  })

  it.each([
     [ 'L', '0:0:W' ],
     [ 'LL', '0:0:S' ],
     [ 'LLL', '0:0:E' ],
     [ 'LLLL', '0:0:N' ],
  ])('rotates the rover to the left (L command)', (coordinates, expected) => {
    const rover = new MarsRover(grid);

    expect(rover.execute(coordinates)).toEqual(expected)
  })

  it.each([
    [ 'RMMM', '3:0:E' ],
  ])('moves rover with command %s expected to be at %s', (coordinates, expected) => {
    const rover = new MarsRover(grid);

    expect(rover.execute(coordinates)).toEqual(expected)
  })
})

describe('Test cases from requirements', () => {
  it.each([
    [ 'MMRMMLM', '2:3:N' ],
    [ 'RMMLM', '2:1:N' ],
    [ 'MRML', '1:1:N' ],
    [ 'MMMMMRRMMM', '0:2:S' ],
  ])('moving rover with %s expected to be at %s', (coordinates, expected) => {
    const rover = new MarsRover(grid);

    expect(rover.execute(coordinates)).toEqual(expected)
  })
})

