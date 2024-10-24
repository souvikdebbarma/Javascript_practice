// Write a JavaScript program that finds the intersection of two arrays (i.e, common elements between them).

function intersectArrays(arr1, arr2) {
    // Create a Set from the first array to store unique elements
    const set1 = new Set(arr1);

    // Filter the second array, keeping only elements that are in set1
    const intersection = arr2.filter(item => set1.has(item));

    return intersection; // Return the array of common elements
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const result = intersectArrays(array1, array2);
console.log("Intersection of the arrays:", result); // Output: [4, 5]