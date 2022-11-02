export interface Output {
    write(argument: any): void
}

export class GameOfLife {
    constructor(private board: number[][], private output: Output) {

    }

    nextGen() {
        this.output.write(this.board)
    }
}
