const converter = require("./index")

describe("Converter Function", ()=>{
    test("Convert integer to roman numeral", () => {
        const input = 4
        const output = "IV"
        expect(converter(input)).toEqual(output)
    })

    test("Print error statement if nothing is entered", () => {
        const input = ""
        const output = "No value entered"
        expect(converter(input)).toEqual(output)
    })

    test("Print error statement if NaN is entered", () => {
        const input = "hello"
        const output = "Enter an integer"
        expect(converter(input)).toEqual(output)
    })

    test("Print error statement if negative number is entered", () => {
        const input = -13
        const output = "Negative roman numerals do not exist"
        expect(converter(input)).toEqual(output)
    })
})