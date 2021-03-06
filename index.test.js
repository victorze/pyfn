const {
  abs, all, any, bin,
  sum, callable, chr, ord,
  range, len, list,
} = require("pyfn");

test("abs", () => {
  expect(abs(-1)).toBe(1);
  expect(abs(0)).toBe(0);
  expect(abs(2)).toBe(2);
});

test("all", () => {
  expect(all([])).toBeTruthy();
  expect(all([true])).toBeTruthy();
  expect(all([true, false])).toBeFalsy();
  expect(all([true, ""])).toBeFalsy();
  expect(all([[], {}, 1, 3.2, "3", console.log])).toBeTruthy();
});

test("any", () => {
  expect(any([])).toBeFalsy();
  expect(any([false, {}])).toBeTruthy();
  expect(any([false, []])).toBeTruthy();
  expect(any([false, 0, 0.0, ""])).toBeFalsy();
});

test("bin", () => {
  expect(bin(3)).toBe("0b11");
  expect(bin(10)).toBe("0b1010");
  expect(bin(-10)).toBe("-0b1010");
  expect(() => bin("10")).toThrow(TypeError);
  expect(() => bin(10.4)).toThrow(TypeError);
});

test("sum", () => {
  expect(sum([3])).toBe(3);
  expect(sum([1, 3, 5])).toBe(9);
  expect(sum([])).toBe(0);
  expect(sum([], 10)).toBe(10);
  expect(() => sum(4)).toThrow(TypeError);
  expect(() => sum({})).toThrow(TypeError);
  expect(() => sum("234")).toThrow(TypeError);
});

test("callable", () => {
  expect(callable(console.log)).toBeTruthy();
  expect(callable(Math)).toBeFalsy();
  expect(callable(Number)).toBeTruthy();
});

test("chr", () => {
  expect(chr(97)).toBe("a");
  expect(chr(8364)).toBe("€");
  expect(chr(128515)).toBe("😃");
  expect(() => chr(1114112)).toThrow(RangeError);
});

test("ord", () => {
  expect(ord("a")).toBe(97);
  expect(ord("€")).toBe(8364);
  expect(ord("😃")).toBe(128515);
});

test("range", () => {
  expect(typeof range(1, 5)[Symbol.iterator]).toBe("function");
  expect(range(1, 5).next()).toEqual({ value: 1, done: false });
  expect(range(1, 1).next()).toEqual({ value: undefined, done: true });
  expect(Array.from(range(10, 20)).length).toBe(10);
  expect(Array.from(range(10, 20))[9]).toBe(19);
  expect(Array.from(range(10, 20, 2)).length).toBe(5);
  expect(Array.from(range(10, 20, 2))[4]).toBe(18);

  expect(Array.from(range(5, 1)).length).toBe(4);
  expect(Array.from(range(20, 10, -2)).length).toBe(5);
  expect(Array.from(range(20, 10, -2))[4]).toBe(12);

  expect(Array.from(range(10)).length).toBe(10);
});

test("len", () => {
  expect(len("python")).toBe(6);
  expect(len([1, 2, 3])).toBe(3);

  const ages = new Map();
  ages.set("Boris", 39);
  ages.set("Liang", 22);
  ages.set("Júlia", 62);
  expect(len(ages)).toBe(3);

  const set = new Set()
  set.add(1)
  set.add(5)
  set.add(5)
  expect(len(set)).toBe(2);

  expect(len(range(5))).toBe(5); // range is built-in function
});

test("list", () => {
  expect(list()).toEqual([]);
  expect(list("js")).toEqual(["j", "s"]);
  expect(list(range(5))).toEqual([0, 1, 2, 3, 4]);  // range is built-in function

  const ages = new Map();
  ages.set("Boris", 39);
  ages.set("Liang", 22);
  ages.set("Júlia", 62);
  expect(list(ages)).toEqual(["Boris", "Liang", "Júlia"]);

  const set = new Set()
  set.add(1)
  set.add(5)
  set.add(5)
  expect(list(set)).toEqual([1, 5]);
});
