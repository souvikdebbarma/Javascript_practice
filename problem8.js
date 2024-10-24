// Write a JavaScript function that returns the first non-repeated character in a string.

function firstNonRepeatedCharacter(str) {
    const charCount = {}; // Object to store character counts

    // First pass: Count each character in the string
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Second pass: Find the first character with a count of 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char; // Return the first non-repeated character
        }
    }

    return null; // Return null if there are no non-repeated characters
}

// Example usage:
const inputString1 = "swiss";
const inputString2 = "hello";
const inputString3 = "aabbcc";

console.log(`First non-repeated character in "${inputString1}":`, firstNonRepeatedCharacter(inputString1)); // Output: "w"
console.log(`First non-repeated character in "${inputString2}":`, firstNonRepeatedCharacter(inputString2)); // Output: "h"
console.log(`First non-repeated character in "${inputString3}":`, firstNonRepeatedCharacter(inputString3)); // Output: null