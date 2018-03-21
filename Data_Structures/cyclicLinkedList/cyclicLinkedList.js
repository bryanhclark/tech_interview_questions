class cyclicLinkedList {
  constructor() {
    this.head = null
  }

  addNode(int) {
    let currentNode = this.head
    //if no head, create new head and point it to itself
    //circular reference, but that's all we got
    if (!currentNode) {
      this.head = new Node(int)
      this.head.next = this.head
    } else {
      //if there's only one node in the buffer
      if (currentNode === currentNode.next) {
        if (int >= currentNode.value) {
          this.insertbetween(int, currentNode)
        }
      } else {
        //if there is more than one node in the buffer
        //if int is greater than or equal to currentNode.value
        if (int >= currentNode.value) {
          //we iterate through while int >= currentNode and we have not reached the end
          while (int >= currentNode.value && currentNode.value < currentNode.next.value) {
            currentNode = currentNode.next
          }
          this.insertbetween(int, currentNode)
        } else {
          //if int it less than current node, we need to iterate through to find where
          //int is greater than currentNode.valu and <= currentNode.next.value
          while (int < currentNode.value && currentNode.value <= currentNode.next.value) {
            currentNode = currentNode.next
          }
          this.insertbetween(int, currentNode)
        }
      }
    }
  }
  insertbetween(int, node) {
    let newNode = new Node(int)
    newNode.next = node.next
    node.next = newNode
    if (newNode.value < this.head.value) {
      this.head = newNode
    }
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

