import adder from "./adder";

describe('API tests', () => {
    test('GET', () => {
        expect(adder(5, 3)).toEqual(8);
    })
});