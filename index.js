// convert integers to roman numerals 

const converter = (num) => {
    if (isNaN(num))
        return "Enter an integer";

        // else if (num == ""){
        //     return "No value entered"
        // }

        else if (num <= 0) {
            return "Negative roman numerals do not exist"
        }

    var digits = String(+num).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}


module.exports = converter



console.log(converter("  "))