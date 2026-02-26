//Import sum
const {sum, fromDollarToYen, fromYenToPound} = require('./app.js');

// First test
test('adds 14 + 9 to equal 23', () => {
    // Call sum function
    let total = sum(14, 9);

    // check total
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(dollars).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("1.07 dollars should be 156.5 yens", function() {
    // This is the comparison for the unit test
    // 1.07 dollars are 1 euro, and 1 euro is 156.5 yens
    // Therefore, 1.07 dollars should be 156.5 yens
     expect(fromDollarToYen(1.07)).toBe(156.5);
})

test("156.5 yens should be 0.87 pounds", function() {
    // This is the comparison for the unit test
    // 156.5 yens are 1 euro, and 1 euro is 0.87 pounds
    // Therefore, 156.5 yens should be 0.87 pounds
     expect(fromYenToPound(156.5)).toBe(0.87);
})