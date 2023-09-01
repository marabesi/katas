export interface Position {
  x: number,
  y: number
}

export class Grid {
  constructor(private x: number, private y: number) { }

  getX(): number {
    return this.x
  }

  getY(): number {
    return this.y
  }
}

