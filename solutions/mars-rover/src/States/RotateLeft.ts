import { State } from '../State'
import { COMPASS } from '../Compass'
import { MarsRover } from '../MarsRover'

export class RotateLeft implements State {
  doAction(rover: MarsRover): void {
    const availablePositions = {
      [COMPASS.NORTH]: COMPASS.WEST,
      [COMPASS.WEST]: COMPASS.SOUTH,
      [COMPASS.SOUTH]: COMPASS.EAST,
      [COMPASS.EAST]: COMPASS.NORTH,
    }
    rover.facing = availablePositions[rover.facing]
    rover.setState(this)
  }
}