const { add } = require("../arithmetica");

test('2+3 is equal to 5', () =>{
    expect(add(2,3)).toBe(5);
})


test('34+52 is equal to 86', () =>{
    expect(add(34,52)).toBe(86);
})