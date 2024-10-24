// Write a JavaScript function that finds the missing number in an array of numbers from 1 to n. Assume only one number js is missing.

function findMissingNumber(arr) {
    const n = arr.length + 1; // Array has one missing number, so total length should be n
    const expectedSum = (n * (n + 1)) / 2; // Sum of numbers from 1 to n
    const actualSum = arr.reduce((sum, num) => sum + num, 0); // Sum of elements in the array

    return expectedSum - actualSum; // The difference is the missing number
}

// Example usage:
const arr = [1, 2, 4, 5]; // Missing number is 3
const missingNumber = findMissingNumber(arr);

// Print the result to the console
console.log(`The missing number is: ${missingNumber}`);