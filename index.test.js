const {
  abs, all, any,
  sum, callable, chr, ord
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
