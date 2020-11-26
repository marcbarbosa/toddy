import Bitmap from "./bitmap";

class InputReader {
  async *read(): AsyncGenerator<Bitmap> {
    for await (const input of process.stdin) {
      const lines = input.toString().split('\n');

      let numberOfTestCases = +lines.shift();

      while (numberOfTestCases--) {
        let [rows] = lines.shift().split(' ');
        const map: boolean[][] = [];

        while (rows--) {
          map.push(
            lines.shift().split('').map((p: string) => !!+p)
          );
        }

        // remove empty line between test cases
        lines.shift();

        yield new Bitmap(map);
      }
    }
  }
}

export default InputReader;
