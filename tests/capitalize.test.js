import capitalize from '../modules/capitalize';

test.skip('capitalize bird to Bird', () => {
  expect(capitalize('bird')).toBe('Bird');
});