import Bitmap from '../bitmap';

describe('Bitmap', () => {
  describe('calculateDistances()', () => {
    it.each([
      [[[true]], '0\n\n'],
      [[[true], [false]], '0\n1\n\n'],
      [[
        [false, false, false, true],
        [false, false, true, true],
        [false, true, true, false],
      ], '3 2 1 0\n2 1 0 0\n1 0 0 1\n\n'],
    ])('should return expected output', (input, expected) => {
      const bitmap = new Bitmap(input);

      const actual = bitmap.calculateDistances().toString();

      expect(actual).toEqual(expected);
    });
  });
});
