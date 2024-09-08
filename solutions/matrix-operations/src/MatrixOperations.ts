export class MatrixOperations {
  private cols: number;
  private rows: number;

	constructor(private matrix: Array<Array<number>>) {
    this.rows = this.matrix.length
    this.cols = this.matrix[0].length;
	}

  turnClockwiseOnce(isFixed: boolean = false): Array<Array<number>> {
    const list = this.matrix.flat();
    const next = [ ...list];

    const last = next.pop();

    if (!isFixed) {
      next.unshift(last);
    } else {
      next.splice(1, 0, last);
    }

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

  turnClockwiseFirstFixedTimes(times: number): Array<Array<number>> {
    return this.turnClockwiseOnce(true);
  }
}

