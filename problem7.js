// Write a JavaScript function to flatten a nested array (i.e, an array that may contain other arrays as element) into a single array.

function flattenArray(arr) {
    // Initialize an empty array to hold the flattened elements
    let result = [];

    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // If the element is an array, recursively flatten it and concatenate
            result = result.concat(flattenArray(arr[i]));
        } else {
            // If it's not an array, push it to the result
            result.push(arr[i]);
        }
    }

    return result;
}

// Example usage:
const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];
const flattenedArray = flattenArray(nestedArray);
console.log("Flattened Array:", flattenedArray);