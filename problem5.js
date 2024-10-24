// Write a JavaScript function to check if a String has balanced parentheses (i.e, (), {}, [] are properly paired ).

function isBalanced(str) {
    // Stack to store opening brackets
    const stack = [];

    // Map of matching parentheses
    const matchingParentheses = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // Loop through each character in the string
    for (let char of str) {
        // If it's an opening bracket, push it onto the stack
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }
        // If it's a closing bracket
        else if (char === ')' || char === '}' || char === ']') {
            // Check if the stack is empty or if the top of the stack doesn't match
            if (stack.length === 0 || stack.pop() !== matchingParentheses[char]) {
                return false; // Unbalanced
            }
        }
    }

    // If the stack is empty at the end, all parentheses are balanced
    return stack.length === 0;
}
// Example usage:
const testString1 = "{[()]}"; // Balanced
const testString2 = "{[(])}"; // Not balanced
const testString3 = "({[]})"; // Balanced

console.log(isBalanced(testString1)); // Output: true
console.log(isBalanced(testString2)); // Output: false
console.log(isBalanced(testString3)); // Output: true