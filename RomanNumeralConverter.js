/*
 *Convert the given number into a roman numeral.
 */
const converted = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1

}
function convertToRoman(num) {
    let finalResult = '';

     for (let roman in converted){
         if (num >= converted[roman]){
             num -= converted[roman];
             finalResult += roman;
         }
     }
    return finalResult;
}

console.log(convertToRoman(36));
