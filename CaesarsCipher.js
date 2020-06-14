/* 
* One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
* In a shift cipher the meanings of the letters are shifted by some set amount.
* A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
* Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
*/

function rot13(str) {
    return str.replace(/[A-Z]/g, (letter) => {
        let asciiValue = letter.charCodeAt(0) + 13;
        if (asciiValue > 90) {
            asciiValue = asciiValue % 90 + 64;
        }
        return String.fromCharCode(asciiValue);
    })
}

console.log(rot13("SERR PBQR PNZC"));