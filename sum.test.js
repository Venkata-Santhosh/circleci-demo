const sum = require('./sum');

test('sum of 2 and 3', sumTest);

function sumTest() {
    expect(sum(2,3)).toBe(5);
}