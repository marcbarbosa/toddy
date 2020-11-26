import InputReader from "./input-reader";

const main = async () => {
  const inputReader = new InputReader();

  for await (const bitmap of inputReader.read()) {
    console.log(bitmap)
  }
};

main();
