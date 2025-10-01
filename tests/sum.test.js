const sum = require('../src/sum');

test('adds 2 + 3 to equal 6 (intentionally wrong)', () => {
    expect(sum(2, 3)).toBe(6);
});

test('handles negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3);
});
