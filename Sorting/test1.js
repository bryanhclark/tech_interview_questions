class cyclicLinkedList {
  constructor() {
    this.head = null
  }

  addNode(int) {
    let currentNode = this.head
    //check to see if there is a head
    if (!this.head) {
      this.head = new Node(int)
      //point itself to itself
      this.head.next = this.head
    } else {
      //check if there's only one
      if (currentNode === this.head) this.insertBetween(int, currentNode)
      else {
        if (int >= currentNode.value) {
          while (int >= currentNode.value && currentNode.value < currentNode.next.value) {
            currentNode = currentNode.next
          }
          this.insertBetween(int, currentNode)
        } else {
          while (int < currentNode.value && currentNode.value < currentNode.next.value) {
            currentNode = currentNode.next
          }
          this.insertBetween(int, currentNode)
        }
      }
    }

  }

  insertBetween(int, node) {
    let newNode = new Node(int)
    newNode.next = node.next
    node.next = newNode
    if (int < this.head.value) this.head = newNode
  }

}


class Node {
  constructor(int) {
    this.value = int
    this.next = null
  }
}

let myList = new cyclicLinkedList()
myList.addNode(3)
myList.addNode(8)
myList.addNode(10)
myList.addNode(15)
myList.addNode(2)
myList.addNode(1)
myList.addNode(7)

console.log(myList)