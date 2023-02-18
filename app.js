// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromEuroToDollar = (euro) => {
    let resultado = euro * oneEuroIs.USD
    return parseFloat(resultado.toFixed(2))
}


const fromDollarToYen = (dollar) => {
    let resultado = dollar / oneEuroIs.USD * oneEuroIs.JPY
    
    return parseFloat(resultado.toFixed(2))
}
const fromYenToPound = (yen) => {
    let resultado = yen / oneEuroIs.JPY * oneEuroIs.GBP
    
    return parseFloat(resultado.toFixed(2))
    
}


//* parseFloat(valueInDollar.toFixed(2))


// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};

