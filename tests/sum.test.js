const sum = require('../src/sum');

test('adds 2 + 3 to equal 5', () => {
    expect(sum(2, 3)).toBe(5);
});

test('handles negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3);
});
