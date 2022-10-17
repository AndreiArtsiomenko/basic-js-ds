const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.head
  }

  enqueue(value) {
    if (this.length === 0) {
      this.head = { value: value, next: null }
    } else {
      let current = this.head

      while (current.next) {
        current = current.next
      }
      current.next = { value: value, next: null }
    }
    this.length++
  }

  dequeue() {
    let current = this.head;
    let result = this.head.value
    this.head = current.next
    return result
  }
}

module.exports = {
  Queue
};
