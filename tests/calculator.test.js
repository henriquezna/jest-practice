import calculator from '../modules/calculator';

test.skip('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test.skip('subtracts 3 - 1 to equal 2', () => {
  expect(calculator.subtract(3, 1)).toBe(2);
});

test.skip('multiplies 2 + 3 to equal 6', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test.skip('divides 6 / 3 to equal 2', () => {
  expect(calculator.divide(6, 3)).toBe(2);
});