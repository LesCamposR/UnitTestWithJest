// import the function sum from the app.js file
const { sum, } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.2 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
});
test("One dollar should be 106.58 yenes", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(5)).toBe(532.92); //1 dollar son 106.58 yenes, entonces 5 yenes deberia ser = (5 / 1.2 * 127.9)
});
test("One yen should be 0.006254 pounds", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(200)).toBe(1.25); // 1 yen son 0.006254 Libras esterlinas, entonces 200 Libras esterlinas deberia ser = (200 / 127.9 * 0.8)
})
