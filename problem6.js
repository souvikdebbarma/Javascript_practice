// Write a JavaScript function to sort an array of numbers using the Bubble Sort algorithm.

function bubbleSort(arr) {
    let n = arr.length;
    let swapped; // Flag to detect if a swap occurred in the current pass

    // Outer loop to traverse through the array
    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        // Inner loop to compare adjacent elements
        for (let j = 0; j < n - i - 1; j++) {
            // If the current element is greater than the next, swap them
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap using destructuring
                swapped = true; // Set the flag to true since a swap occurred
            }
        }

        // If no swaps were made in the inner loop, the array is already sorted
        if (!swapped) {
            break;
        }
    }

    return arr; // Return the sorted array
}

// Example usage:
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", arr);

// Sort the array using bubble sort
const sortedArray = bubbleSort(arr);
console.log("Sorted array:", sortedArray);