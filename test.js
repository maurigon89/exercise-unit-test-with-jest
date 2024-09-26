// Importamos las funciones desde app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Prueba de la función fromEuroToDollar
test("One euro should be 1.07 dollars", () => {
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 3.5 euros son 3.745 dólares
});

// Prueba de la función fromDollarToYen
test("One dollar should be 146.26 yenes", () => {
    // 1 dólar convertido a yenes
    const expectedYen = (1 / 1.07) * 156.5;
    expect(fromDollarToYen(1)).toBeCloseTo(expectedYen, 2);
});

// Prueba de la función fromYenToPound
test("One yen should be 0.00556 pounds", () => {
    // 1 yen convertido a libras
    const expectedPound = (1 / 156.5) * 0.87;
    expect(fromYenToPound(1)).toBeCloseTo(expectedPound, 5);
});