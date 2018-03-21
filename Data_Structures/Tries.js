class Node {
  constructor(data) {
    this.data = data
    this.isWord = false
    this.prefixes = 0
    this.children = {}
  }
}

class Trie {
  constructor() {
    this.root = new Node('')
  }

  contains(word) {
    if (!this.root) return false
    return this._contains(this.root, word)
  }

  _contains(node, word) {
    if (!node || !word) return false
    let letter = word[0]
    let child = node.children[letter]
    if (child) {
      let remainder = word.substring(1)
      if (!remainder && child.isWord) return true
      else return this._contains(child, remainder)
    } else return false
  }

  add(word) {
    if (!this.root) return null
    this._addNode(this.root, word)
  }

  _addNode(node, word) {
    if (!node || !word) return null
    node.prefixes++
    let letter = word[0]
    let child = node.children[letter]
    if (!child) {
      child = new Node(letter)
      node.children[letter] = child
    }
    let remainder = word.substring(1)
    if (!remainder) child.isWord = true
    this._addNode(child, remainder)
  }

  remove(word) {
    if (!this.root) return null
    if (this.contains(word)) this._removeNode(this.root, word)
  }

  _removeNode(node, word) {
    if (!node | !word) return
    node.prefixes--
    let letter = word[0]
    let child = node.children[letter]
    if (child) {
      let remainder = word.substring(1)
      if (remainder) {
        if (child.prefixes === 1) delete node.children[letter]
        else this._removeNode(child, remainder)
      } else {
        if (child.prefixes === 0) delete node.children[letter]
        else child.isWord = false
      }
    }
  }
}


let myTrie = new Trie()
myTrie.add('boob');
myTrie.add('steve')



console.log(myTrie.contains('steve'))
myTrie.remove('boob')
console.log(myTrie.contains('boob'))
console.log(myTrie.contains('steve'))
