export class MatrixOperations {
  private cols: number;
  private rows: number;

	constructor(private matrix: Array<Array<number>>) {
    this.rows = this.matrix.length
    this.cols = this.matrix[0].length;
	}

  turnClockwiseOnce(): Array<Array<number>> {
    const list = this.matrix.flat();
    const next = [ ...list];

    const last = next.pop();
    next.unshift(last);

    const matrix = new Array(this.rows);
    for (let i = 0; i < this.rows; i++) {
      matrix[i] = new Array(this.cols);
    }

    const result = [];

    for (let i = 0; i < matrix.length; i++) {
      result[i] = next.splice(0, this.cols);
    }

    return result;
  }
}

