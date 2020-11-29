import BitmapReader from './bitmap-reader';

const main = async () => {
  const bitmapReader = new BitmapReader();

  for await (const bitmap of bitmapReader.read(process.stdin)) {
    process.stdout.write(bitmap.calculateDistances().toString());
  }
};

main();
