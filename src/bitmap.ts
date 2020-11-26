class Bitmap {
  private rows: number;
  private columns: number;
  private map: boolean[][];

  constructor(map: boolean[][]) {
    this.rows = map.length;
    this.columns = map[0].length;
    this.map = map;
  }
}

export default Bitmap;
