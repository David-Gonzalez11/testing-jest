const subtract = require('./subtract')
test('subtract 3 - 2 to equal 1', () => {
  expect(subtract(3, 2)).toBe(1);
  expect(subtract(4,2)).toBe(2)
});
test('subtract 6 - 4 to equal 2', () => {
  expect(subtract(6, 4)).toBe(2);
  expect(subtract(4,2)).toBe(2)
});
