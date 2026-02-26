const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs["USD"]
}

const fromDollarToYen = (dollars) => {
    return dollars / oneEuroIs["USD"] * oneEuroIs["JPY"]
}

const fromYenToPound = (yens) => {
    return yens / oneEuroIs["JPY"] * oneEuroIs["GBP"]
}

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};