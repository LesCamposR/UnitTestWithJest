// import the function sum from the app.js file
const { sum } = require('../app.js');

// start your first test
test('adds 10 + 9 to equal 19', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(10, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(19);
});