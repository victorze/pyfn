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

function bin(x) {
  if (!Number.isInteger(x)) {
    throw new TypeError("The argument must be integer");
  }
  let prefix = x < 0 ? "-0b" : "0b";
  let bynary = x < 0 ? (-x).toString(2) : x.toString(2);
  return prefix + bynary;
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

function* range(start, stop, step = start < stop ? 1 : -1) {
  if (!stop) {
    for (let i = 0; i < start; i++) {
      yield i;
    }
  }

  if (step > 0) {
    for (let i = start; i < stop; i += step) {
      yield i;
    }
  } else {
    for (let i = start; i > stop; i += step) {
      yield i;
    }
  }
}

function len(s) {
  return Array.from(s).length;
}

function list(iterable) {
  if (!iterable) return [];
  if (Object.getPrototypeOf(iterable) == Map.prototype) {
    return Array.from(iterable.keys());
  }
  return Array.from(iterable);
}

module.exports = {
  abs, all, any, bin,
  sum, callable, chr, ord,
  range, len, list,
}
