import { Readable } from 'stream';

import Bitmap from "./bitmap";

class BitmapReader {
  private async readAll(stream: Readable): Promise<string> {
    let buffer: Buffer = Buffer.from([]);

    for await (const chunk of stream) {
      buffer += chunk;
    }

    return buffer.toString();
  }

  async *read(stream: Readable): AsyncGenerator<Bitmap> {
    const lines = (await this.readAll(stream)).split('\n');

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

export default BitmapReader;
