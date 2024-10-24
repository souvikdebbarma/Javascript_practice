// Write a JavaScript function to deep clone an object (i.e, create a copy of an object with the same values, including nested objects.)

function deepClone(obj) {
    // If the value is not an object or is null, return it (base case)
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // Handle arrays
    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }

    // Handle objects
    const clonedObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            // Recursively deep clone nested objects and arrays
            clonedObj[key] = deepClone(obj[key]);
        }
    }

    return clonedObj;
}

// Example usage:
const original = {
    name: "John",
    age: 30,
    hobbies: ["reading", "gaming"],
    address: {
        city: "New York",
        zip: 10001
    }
};

// Deep clone the original object
const cloned = deepClone(original);

// Modify the cloned object
cloned.name = "Jane";
cloned.hobbies.push("cooking");
cloned.address.city = "Los Angeles";

// Logging the original and cloned objects
console.log("Original Object:", original);
console.log("Cloned Object:", cloned);