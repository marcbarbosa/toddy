class Output {
  map: number[][];

  constructor(map: number[][]) {
    this.map = map;
  }

  toString() {
    for (const line of this.map) {
      console.log(line.join(' '));
    }
    console.log();
  }
}

export default Output;
