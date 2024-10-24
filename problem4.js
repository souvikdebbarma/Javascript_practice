// Write a JavaScript program to implement a queue using two stacks. Implement enqeue and deqeue Operations.

class QueueWithTwoStacks {
    constructor() {
        this.stack1 = []; // Stack to handle enqueue operations
        this.stack2 = []; // Stack to handle dequeue operations
    }

    // Enqueue an element into the queue
    enqueue(element) {
        this.stack1.push(element); // Always push onto stack1
        console.log(`Enqueued ${element} → Queue: [${this.stack1.join(", ")}]`);
    }

    // Dequeue an element from the queue
    dequeue() {
        // If both stacks are empty, the queue is empty
        if (this.isEmpty()) {
            console.log("Dequeue → Queue is empty");
            return null;
        }

        // If stack2 is empty, transfer elements from stack1 to stack2
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        // Pop from stack2, which simulates dequeuing from the front of the queue
        const dequeuedElement = this.stack2.pop();
        console.log(`Dequeued ${dequeuedElement} → Queue: [${[...this.stack2.reverse(), ...this.stack1].join(", ")}]`);
        return dequeuedElement;
    }

    // Check if the queue is empty
    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}

// Example usage:
const queue = new QueueWithTwoStacks();

// Enqueue elements
queue.enqueue(10); // Output: "Enqueued 10 → Queue: [10]"
queue.enqueue(20); // Output: "Enqueued 20 → Queue: [10, 20]"
queue.enqueue(30); // Output: "Enqueued 30 → Queue: [10, 20, 30]"

// Dequeue elements
queue.dequeue(); // Output: "Dequeued 10 → Queue: [20, 30]"
queue.dequeue(); // Output: "Dequeued 20 → Queue: [30]"

// Enqueue more elements
queue.enqueue(40); // Output: "Enqueued 40 → Queue: [30, 40]"

// Dequeue the rest
queue.dequeue(); // Output: "Dequeued 30 → Queue: [40]"
queue.dequeue(); // Output: "Dequeued 40 → Queue is empty"
queue.dequeue(); // Output: "Dequeue → Queue is empty"