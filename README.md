# Python built-in functions implemented in Javascript

## Installation

```bash
npm install pyfn
```

## Usage

```js
const { all, range, list, chr, sum, bin, callable } = require("pyfn");

console.log(all([], {}, 1, " "));
// => true

console.log(list(range(10)));
// => [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

console.log(chr(128515));
// => 😃

console.log(sum(range(10, 20)));
// => 145

console.log(bin(255));
// => 0b11111111

console.log(callable(console.log));
// => true
```

## Implemented functions

`abs, all, any, bin, sum, callable, chr, ord, range, len, list`
