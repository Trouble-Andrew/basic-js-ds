const {NotImplementedError} = require('../extensions/index.js');
const {ListNode} = require('../extensions/list-node.js');

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
    return this.head;
  }

  enqueue(value) {
    let next = this.head;
    if (this.length === 0) {
      this.head = new ListNode(value);
    } else {
      while (next.next) {
        next = next.next;
      }
      next.next = new ListNode(value);
    }
    this.length++;
  }

  dequeue() {
    const outElement = this.head;

    this.head = outElement.next;
    this.length > 0 ? this.length-- : '';

    return outElement.value;
  }
}


module.exports = {
  Queue
};
