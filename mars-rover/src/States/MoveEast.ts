import { State } from '../State'
import { MarsRover } from '../MarsRover'

export class MoveEast implements State {
  doAction(rover: MarsRover): void {
    rover.position.x++
    rover.setState(this)
  }
}