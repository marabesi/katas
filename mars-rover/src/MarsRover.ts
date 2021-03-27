import { ACTION, COMPASS, ROTATE } from './Compass'
import { Grid, Position } from './Grid'
import { Context, State } from './State'
import { StartState } from './States/Start'
import { RotateRight } from './States/RotateRight'
import { RotateLeft } from './States/RotateLeft'
import { MoveNorth } from './States/MoveNorth'
import { MoveSouth } from './States/MoveSouth'
import { MoveEast } from './States/MoveEast'
import { MoveWest } from './States/MoveWest'
import { WrapAroundX } from './States/WrapAroundX'
import { WrapAroundY } from './States/WrapAroundY'

export class MarsRover implements Context {

  private state: State
  private grid: Grid
  facing: COMPASS.NORTH | COMPASS.SOUTH | COMPASS.WEST | COMPASS.EAST
  position: Position

  constructor(grid: Grid) {
    this.grid = grid
  }

  setState(state: State): void {
    this.state = state
  }

  getState(): State {
    return this.state
  }

  execute(command: string) {
    const start: StartState = new StartState()
    start.doAction(this)

    for (const commandItem of command) {
      if (commandItem === ROTATE.RIGHT) {
        const rotateRight: State = new RotateRight()
        rotateRight.doAction(this)
      }

      if (commandItem === ROTATE.LEFT) {
        const rotateLeft: State = new RotateLeft();
        rotateLeft.doAction(this)
      }

      if (this.facing === COMPASS.NORTH && commandItem === ACTION.MOVE) {
        const moveNorth: State = new MoveNorth()
        moveNorth.doAction(this)
      }

      if (this.facing === COMPASS.SOUTH && commandItem === ACTION.MOVE) {
        const moveNorth: State = new MoveSouth()
        moveNorth.doAction(this)
      }

      if (this.facing === COMPASS.EAST && commandItem === ACTION.MOVE) {
        const moveEast: State = new MoveEast()
        moveEast.doAction(this)
      }

      if (this.facing === COMPASS.WEST && commandItem === ACTION.MOVE) {
        const moveWest: State = new MoveWest()
        moveWest.doAction(this)
      }

      if (this.position.x >= this.grid.getX()) {
        const wrapAroundX: State = new WrapAroundX()
        wrapAroundX.doAction(this)
      }

      if (this.position.y >= this.grid.getY()) {
        const wrapAroundY: State = new WrapAroundY()
        wrapAroundY.doAction(this)
      }
    }

    return `${this.position.x}:${this.position.y}:${this.facing}`
  }
}