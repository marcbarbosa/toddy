class Output {
  map: number[][];

  constructor(map: number[][]) {
    this.map = map;
  }

  toString(): string {
    let outputStr: string = '';

    for (const line of this.map) {
      outputStr += `${line.join(' ')}\n`;
    }

    return outputStr + '\n';
  }
}

export default Output;
