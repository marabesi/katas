import { MarsRover } from './MarsRover'

export interface Context {
  setState(state: State): void
  getState(): State
}

export interface State {
  doAction(rover: MarsRover): void
}