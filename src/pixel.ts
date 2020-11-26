class Pixel {
  row: number;
  column: number;
  value: boolean;

  constructor(row, column, value) {
    this.row = row;
    this.column = column;
    this.value = value;
  }

  id(): number {
    return +`${this.row.toString()}${this.column.toString()}`;
  }
}

export default Pixel;
