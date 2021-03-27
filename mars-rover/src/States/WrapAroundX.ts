import { State } from '../State'
import { MarsRover } from '../MarsRover'

export class WrapAroundX implements State {
  doAction(rover: MarsRover): void {
    rover.position.x = 0
    rover.setState(this)
  }
}