//Linked List
//Helper Functions = addToHead, addToTail, removeHead, removeTail, search

class Node {
  constructor(val) {
    this.value = val
    this.next = null
    this.previous = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  addToHead(value) {
    if (!this.head) {
      this.head = new Node(value)
      this.tail = this.head
    } else {
      let newHead = new Node(value)
      newHead.next = this.head
      this.head.previous = newHead
      this.head = newHead
    }
  }

  removeHead() {
    let removedHead = null
    if (this.head) {
      removedHead = this.head.value
      if (this.head === this.tail) {
        this.head = null
        this.tail = null
      } else {
        this.head = this.head.next
        this.head.previous = null
      }
    } return removedHead
  }

  addToTail(value) {
    if (!this.tail) {
      this.tail = new Node(value)
      this.head = this.tail
    } else {
      let newTail = new Node(value)
      newTail.previous = this.tail
      this.tail.next = newTail
      this.tail = newTail
    }
  }

  removeTail() {
    let removedTail = null
    if (this.tail) {
      removedHead = this.tail.value
      if (this.tail === this.head) {
        this.tail = null
        this.head = null
      } else {
        this.tail = this.tail.previous
        this.tail.next = null
      }
    } return removedTail
  }

  search(value) {
    let currentNode = null
    if (this.head) currentNode = this.head
    while (currentNode) {
      if (currentNode.value === value) return value
      else currentNode = currentNode.next
    }
    return currentNode
  }

}
