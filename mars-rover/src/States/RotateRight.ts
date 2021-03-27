import { State } from '../State'
import { COMPASS } from '../Compass'
import { MarsRover } from '../MarsRover'

export class RotateRight implements State {
  doAction(rover: MarsRover): void {
    const availablePositions = {
      [COMPASS.NORTH]: COMPASS.EAST,
      [COMPASS.EAST]: COMPASS.SOUTH,
      [COMPASS.SOUTH]: COMPASS.WEST,
      [COMPASS.WEST]: COMPASS.NORTH
    }
    rover.facing = availablePositions[rover.facing]
    rover.setState(this)
  }
}