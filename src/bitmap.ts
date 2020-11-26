import Pixel from "./pixel";

interface Control {
  accumulator: number;
  visited: Set<number>;
}

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

  private nearestWhiteRecursive(pixels: Pixel[], control: Control): number {
    let unvisitedNeighbors: Pixel[] = [];
    const uniqueNeighbors: Set<number> = new Set();

    for (const p of pixels) {
      if (p.value) return control.accumulator;
      control.visited.add(p.id());

      this.getNeighbors(p).forEach(p => {
        if (!control.visited.has(p.id()) && !uniqueNeighbors.has(p.id())) {
          unvisitedNeighbors.push(p);
          uniqueNeighbors.add(p.id());
        }
      });
    };

    control.accumulator++;

    return this.nearestWhiteRecursive(unvisitedNeighbors, control);
  }

  private nearestWhite(p: Pixel): number {
    if (p.value) return 0;
    const visited: Set<number> = new Set([p.id()]);
    return this.nearestWhiteRecursive(this.getNeighbors(p), { accumulator: 1, visited });
  }

  calculateDistances(): number[][] {
    const distanceMatrix: number[][] = [];

    for (let i = 0; i < this.map.length; i++) {
      const distances: number[] = [];
      for (let j = 0; j < this.map[i].length; j++) {
        distances.push(this.nearestWhite(new Pixel(i, j, this.map[i][j])));
      }
      distanceMatrix.push(distances);
    }

    return distanceMatrix;
  }
}

export default Bitmap;
