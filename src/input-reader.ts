import Bitmap from "./bitmap";

class InputReader {
  async *read(): AsyncGenerator<Bitmap> {
    let buffer: Buffer = Buffer.from([]);

    for await (const chunk of process.stdin) {
      buffer += chunk;
    }

    const lines = buffer.toString().split('\n');

    let numberOfTestCases = +lines.shift();

    while (numberOfTestCases--) {
      const map: boolean[][] = [];

      let rows = +lines.shift().split(' ').shift();

      while (rows--) {
        map.push(lines.shift().split('').map((p: string) => !!+p));
      }
      // remove empty line between test cases
      lines.shift();

      yield new Bitmap(map);
    }
  }
}

export default InputReader;