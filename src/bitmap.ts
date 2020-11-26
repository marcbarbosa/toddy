import Pixel from "./pixel";
import Output from "./output";

class Bitmap {
  private rows: number;
  private columns: number;
  private map: boolean[][];

  constructor(map: boolean[][]) {
    this.rows = map.length;
    this.columns = map[0].length;
    this.map = map;
  }

  private getNeighbors(p: Pixel): Pixel[] {
    const neighbors: Pixel[] = [];

    // up
    if (p.row - 1 >= 0) {
      neighbors.push(new Pixel(p.row - 1, p.column, this.map[p.row - 1][p.column]));
    }

    // right
    if (p.column + 1 < this.columns) {
      neighbors.push(new Pixel (p.row, p.column + 1, this.map[p.row][p.column + 1]));
    }

    // down
    if (p.row + 1 < this.rows) {
      neighbors.push(new Pixel(p.row + 1, p.column, this.map[p.row + 1][p.column]));
    }

    // left
    if (p.column - 1 >= 0) {
      neighbors.push(new Pixel(p.row, p.column - 1, this.map[p.row][p.column - 1]));
    }

    return neighbors;
  }

  private findNearestWhite(p: Pixel): number {
    if (p.value) return 0;

    let accumulator = 1;
    const visited: Set<number> = new Set([p.id()]);

    let neighbors = this.getNeighbors(p);

    while (true) {
      if (neighbors.find(p => p.value)) return accumulator;

      const alreadyAdded = new Set<number>();
      neighbors = neighbors.reduce((acc: Pixel[], p) => {
        const nextNeighbors = this.getNeighbors(p);
        for (const p of nextNeighbors) {
          if (!visited.has(p.id()) && !alreadyAdded.has(p.id())) {
            acc.push(p);
            alreadyAdded.add(p.id());
            visited.add(p.id());
          }
        }
        return acc;
      }, new Array<Pixel>());

      accumulator++;
    }
  }

  calculateDistances(): Output {
    const outputMap: number[][] = [];

    for (let row = 0; row < this.map.length; row++) {
      const distances: number[] = [];
      for (let col = 0; col < this.map[row].length; col++) {
        distances.push(this.findNearestWhite(new Pixel(row, col, this.map[row][col])));
      }
      outputMap.push(distances);
    }

    return new Output(outputMap);
  }
}

export default Bitmap;
