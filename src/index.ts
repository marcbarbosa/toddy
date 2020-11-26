import InputReader from "./input-reader";

const main = async () => {
  const inputReader = new InputReader();

  for await (const bitmap of inputReader.read()) {
    for (const line of bitmap.calculateDistances()) {
      console.log(line.join(' '));
    }
    console.log();
  }
};

main();
