# toddy

This repository implements the task proposed here [INSTRUCTIONS.md](./INSTRUCTIONS.md)

## How to run
Pre-requisites:
- Node.js
- npm

```sh
npm install
npm run build
npm start < input.txt
```

Important: a valid input is required as described on [INSTRUCTIONS.md](./INSTRUCTIONS.md)

## Benchmark

Current implementation is not considering any performance optimization.

CPU: Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz

Test case: a single bitmap 182 x 182, one white pixel at [0, 0]
```
real    9m25.004s
user    9m18.919s
sys     0m15.787s
```
