class Stack {
    constructor() {
      this.stack = []; // Initialize an empty array to hold stack elements
    }
  
    // Push method to add an element to the stack
    push(element) {
      this.stack.push(element);
      console.log(`Push ${element} → Stack: [${this.stack.join(', ')}]`);
    }
  
    // Pop method to remove the top element from the stack
    pop() {
      if (this.isEmpty()) {
        console.log('Stack is empty. Cannot pop.');
        return null;
      }
      const poppedElement = this.stack.pop();
      console.log(`Pop ${poppedElement} → Stack: [${this.stack.join(', ')}]`);
      return poppedElement;
    }
  
    // Peek method to see the top element of the stack without removing it
    peek() {
      if (this.isEmpty()) {
        console.log('Stack is empty.');
        return null;
      }
      return this.stack[this.stack.length - 1];
    }
  
    // isEmpty method to check if the stack is empty
    isEmpty() {
      return this.stack.length === 0;
    }
  }
  
  // Example usage:
  const stack = new Stack();
  
  stack.push(10);  // Stack: [10]
  stack.push(20);  // Stack: [10, 20]
  stack.push(30);  // Stack: [10, 20, 30]
  
  stack.pop();     // Stack: [10, 20]
  stack.pop();     // Stack: [10]
  stack.pop();     // Stack: []
  
  // Checking the stack
  console.log('Is stack empty?', stack.isEmpty()); // true
  console.log('Top element:', stack.peek());       // null
  