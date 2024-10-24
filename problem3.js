// Write a JavaScript program to find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s) {
    const seen = new Set(); // Set to store characters in the current window
    let left = 0; // Left pointer for the sliding window
    let maxLength = 0; // Variable to store the maximum length of a substring

    // Loop through the string with the right pointer
    for (let right = 0; right < s.length; right++) {
        // If we encounter a repeated character, shrink the window from the left
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }

        // Add the current character to the set
        seen.add(s[right]);

        // Calculate the maximum length of substring found so far
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength; // Return the maximum length found
}

// Example usage:
const inputString = "abcabcbb";
const result = lengthOfLongestSubstring(inputString);
console.log(`Length of the longest substring without repeating characters: ${result}`);