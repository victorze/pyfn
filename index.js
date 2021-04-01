function abs(x) {
  return Math.abs(x);
}

function all(iterable) {
  for (let element of iterable) {
    if (!element) {
      return false;
    }
  }
  return true;
}

function any(iterable) {
  for (let element of iterable) {
    if (element) {
      return true;
    }
  }
  return false;
}

function sum(iterable, start = 0) {
  if (typeof iterable == "string") {
    throw new TypeError();
  }

  let total = start;
  for(let number of iterable) {
    total += number;
  }
  return total
}

function callable(object) {
  return typeof object == "function";
}

function chr(i) {
  return String.fromCodePoint(i)
}

function ord(c) {
  return c.codePointAt();
}

module.exports = {
  abs, all, any,
  sum,
  callable,
  chr,
  ord,
}
