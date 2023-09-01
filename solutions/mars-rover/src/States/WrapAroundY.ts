import { State } from '../State'
import { MarsRover } from '../MarsRover'

export class WrapAroundY implements State {
  doAction(rover: MarsRover): void {
    rover.position.y = 0
    rover.setState(this)
  }
}