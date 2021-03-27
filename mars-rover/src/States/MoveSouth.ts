import { State } from '../State'
import { MarsRover } from '../MarsRover'

export class MoveSouth implements State {
  doAction(rover: MarsRover): void {
    rover.position.y--
    rover.setState(this)
  }
}