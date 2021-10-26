import caesarCipher from '../modules/caesarCipher.js';

test.skip('abcd becomes bcde', () => {
  expect(caesarCipher('abcd', 1)).toBe('bcde');
});