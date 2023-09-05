test("ToT_Is 1 equal to 1", () => {
  expect(1).toBe(1); // not good, values are hard coded. only tobe will be hardcoded
});

//REAL TESTS HERE

const calculator = require("../models/calculator.js"); // Importing the modules from folder models

// start of TDD

test("sum 5 + 100 should get 105", () => {
  const result = calculator.add(5, 100);
  expect(result).toBe(105);
});

test("string + number returns Error message", () => {
  const result = calculator.add("apple35", 100);
  expect(result).toBe("Error");
});

test("number + string returns Error message", () => {
  const result = calculator.add(100, "apple35");
  expect(result).toBe("Error");
});

test("first argument as string is computed as number", () => {
  const result = calculator.add(100, "2");
  expect(result).toBe(102);
});

test("second argument as string is computed as number", () => {
  const result = calculator.add("2", 100);
  expect(result).toBe(102);
});

test("first argument was not initialized", () => {
  const result = calculator.add(null, 100);
  expect(result).toBe("Error");
});

test("second argument was not initialized", () => {
  const result = calculator.add(100, null);
  expect(result).toBe("Error");
});

test("No argument is initialized", () => {
  const result = calculator.add(null, null);
  expect(result).toBe("Error");
});

test("More than 2 arguments initialized", () => {
  const result = calculator.add("100", 300, 500, "A");
  expect(result).toBe("Error");
});
