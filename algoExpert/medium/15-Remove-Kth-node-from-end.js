class LinkedList {
  constructor(value) {
    this.value = value
    this.next = null
  }

  addMany(values) {
    let current = this
    //this is to get to the last value
    while (current.next !== null) {
      current = current.next
    }
    for (const value of values) {
      current.next = new LinkedList(value)
      current = current.next
    }
  }

}

const removeKthNodeFromEnd = (head, k) => {
  let first = head;
  let second = head;
  let counter = 0;
  let previous = null
  //move second kth places, 
  while (counter < k) {
    second = second.next
    counter++
  }
  //if there are exactly k nodes in the linked list
  if (second === null) {
    head = head.next
    return head
  }
  //second is pointing to the right node
  //first is pointing to the first node
  while (second !== null) {
    second = second.next
    previous = first
    first = first.next
  }
  previous.next = first.next
  return head.next
}

let myList = new LinkedList(0)
myList.addMany([1, 2, 3, 4, 5, 6])


console.log(removeKthNodeFromEnd(myList, 4))

