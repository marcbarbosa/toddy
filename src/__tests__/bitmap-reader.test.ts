import { Readable } from 'stream';

import BitmapReader from '../bitmap-reader';
import Bitmap from '../bitmap';

describe('BitmapReader', () => {
  describe('read()', () => {
    it('should read successfully from process.stdin', async () => {
      const input = Readable.from('2\n1 1\n1\n\n2 1\n1\n0\n');

      const expectedBitmaps: Bitmap[] = [
        new Bitmap([[true]]),
        new Bitmap([[true], [false]]),
      ];

      const inputReader = new BitmapReader();

      expect.assertions(2);

      let ix = 0;
      for await (const bitmap of inputReader.read(input)) {
        expect(bitmap).toEqual(expectedBitmaps[ix++]);
      }
    });
  });
});
