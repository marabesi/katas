export class MatrixOperations {
  private cols: number;
  private rows: number;

	constructor(private matrix: Array<Array<number>>) {
    this.rows = this.matrix.length
    this.cols = this.matrix[0].length;
	}

  private turnClockwise(times: number, isFixed: boolean = false): Array<Array<number>> {
    let result = [];
    
    let list = this.matrix;

    while (times) {
      let next = [ ...list.flat() ];

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

      for (let i = 0; i < matrix.length; i++) {
        result[i] = next.splice(0, this.cols);
      }

      list = [...result];

      times--;
    }

    return result;
  }

  turnClockwiseTimes(times: number): Array<Array<number>> {
    return this.turnClockwise(times, false);
  }

  turnClockwiseFirstFixedTimes(times: number): Array<Array<number>> {
    return this.turnClockwise(times, true);
  }
}

