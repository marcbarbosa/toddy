import InputReader from "./input-reader";

const main = async () => {
  const inputReader = new InputReader();

  for await (const bitmap of inputReader.read()) {
    bitmap.calculateDistances().toString();
  }
};

main();
