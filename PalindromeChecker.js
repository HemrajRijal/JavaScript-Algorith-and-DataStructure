/* 
*Return true if the given string is a palindrome. Otherwise, return false.
 */

/*
* A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
*/

function palindrome(str) {
    let alphaNum = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
    let reverseStr = alphaNum.split("").reverse().join("");

    return alphaNum === reverseStr;

}

console.log(palindrome("eye"));
