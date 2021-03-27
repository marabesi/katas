import { State } from '../State'
import { COMPASS } from '../Compass'
import { MarsRover } from '../MarsRover'

export class StartState implements State {
  doAction(rover: MarsRover): void {
    rover.facing = COMPASS.NORTH
    rover.position = {
      x: 0,
      y: 0,
    }
    rover.setState(this)
  }
}