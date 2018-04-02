//breadth-firsth search

class Node {
  constructor(name) {
    this.name = name
    this.children = []
  }

  addChild(name) {
    this.children.push(new Node(name))
    return this
  }

  breadthFirstSearch(array) {
    let queue = [this]
    while (queue.length) {
      let current = queue.shift()
      current.children.forEach(child => queue.push(child))
      array.push(current.name)
    }
    return array
  }
}