export interface Context {
  setState(state: State): void
  getState(): State
}

export interface State {
  doAction(context: Context): void
}