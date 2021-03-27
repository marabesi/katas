import { MarsRover } from './MarsRover'

export interface State {
  doAction(rover: MarsRover): void
}