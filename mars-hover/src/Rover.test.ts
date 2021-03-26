import { MarsRover } from './MarsRover'

describe('Rover coordinates', () => {
  it.each([
    [ 'M', '0:1:N' ],
    [ 'MM', '0:2:N' ],
    [ 'MMM', '0:3:N' ],
    [ 'MMMM', '0:4:N' ],
    [ 'MMMMM', '0:5:N' ],
    [ 'MMMMMM', '0:6:N' ],
    [ 'MMMMMMM', '0:7:N' ],
    [ 'MMMMMMMMMM', '0:0:N' ],
  ])('moves rover in the X axis (command %s, expected to be at %s)', (coordinates, expected) => {
    const rover = new MarsRover();

    expect(rover.execute(coordinates)).toEqual(expected)
  })

  it.each([
    [ 'RM', '1:0:E' ],
    [ 'RMM', '2:0:E' ],
    [ 'RMMM', '3:0:E' ],
    [ 'RMMMMMMMMMM', '0:0:E' ],
  ])('moves rover in the Y axis (command %s, expected to be at %s)', (coordinates, expected) => { const rover = new MarsRover();

    expect(rover.execute(coordinates)).toEqual(expected)
  })

  it.each([
    [ 'R', '0:0:E' ],
    [ 'RR', '0:0:S' ],
    [ 'RRR', '0:0:W' ],
    [ 'RRRR', '0:0:N' ],
  ])('rotates the rover R coordinate', (coordinates, expected) => {
    const rover = new MarsRover();

    expect(rover.execute(coordinates)).toEqual(expected)
  })

  it.each([
     [ 'L', '0:0:W' ],
     [ 'LL', '0:0:S' ],
     [ 'LLL', '0:0:E' ],
     [ 'LLLL', '0:0:N' ],
  ])('rotates the rover L coordinate', (coordinates, expected) => {
    const rover = new MarsRover();

    expect(rover.execute(coordinates)).toEqual(expected)
  })

  it.each([
    [ 'MRML', '1:1:N' ],
    [ 'RMMM', '3:0:E' ],
  ])('moves rover with command %s expected to be at %s', (coordinates, expected) => {
    const rover = new MarsRover();

    expect(rover.execute(coordinates)).toEqual(expected)
  })
})

describe('Acceptance', () => {
  it.each([
    [ 'MMRMMLM', '2:3:N' ],
    [ 'RMMLM', '2:1:N' ],
  ])('moving rover with %s expected to be at %s', (coordinates, expected) => {
    const rover = new MarsRover();

    expect(rover.execute(coordinates)).toEqual(expected)
  })
})

