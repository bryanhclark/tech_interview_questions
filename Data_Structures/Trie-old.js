//Node Constructor
function Node(data) {
  this.data = data
  this.isWord = false
  this.prefixes = 0
  this.children = {}
}


//Trie constructor
function Trie() {
  this.root = new Node('')
}

Trie.prototype.add = function (word) {
  //if there's no root, just return
  if (!this.root) return null
  //else go into helper function
  this._addNode(this.root, word)
}

Trie.prototype._addNode = function (node, word) {
  //if no root or a node and no word is passed in, return null
  if (!node || !word) return null
  node.prefixes++
  //let to add
  let letter = word.charAt(0)
  //check to see if the letter is already present
  let child = node.children[letter]
  if (!child) {
    //if no letter exists in trie, create a new node
    child = new Node(letter)
    //set the new child node to the current Node's children
    node.children[letter] = child
  }
  //get remainder of word to enter
  let remainder = word.substring(1)
  //if there's no remainder, set end of word to true
  if (!remainder) child.isWord = true
  //pass the rest of the word, if it exists back into funciton
  this._addNode(child, remainder)
}

Trie.prototype.remove = function (word) {
  //if there's no root, just return
  if (!this.root) return
  //check to see if word exists in trie first
  if (this.contains(word)) {
    //if word exists, pass to helper function
    this._removeNode(this.root, word)
  }
}

Trie.prototype._removeNode = function (node, word) {
  if (!node || !word) return
  node.prefixes--
  let letter = word.charAt(0)
  let child = node.children[letter]
  //if child exists
  if (child) {
    //set remainder of word to variable
    let remainder = word.substring(1)
    if (remainder) {
      //if child.prefixes = 1, then there's only one word on this branch, so we can delete the whole word/node here and not have to go further
      if (child.prefixes === 1) {
        delete node.children[letter]
      } else {
        //if there are more than 1 prefix, it means that this is a branch and we must go further down to delete the word
        this._removeNode(child, remainder)
      }
      //if no remainder
    } else {
      //if it isn't a prefix for anything it means its the end of the word, so we can delete the node
      if (child.prefixes === 0) {
        delete node.children[letter]
      } else {
        //if there's no remainder, and prefixes is not 0, it means that it's the end of this word, but not for another word, so we set isWord to false
        child.isWord = false
      }
    }
  }
}

Trie.prototype.contains = function (word) {
  if (!this.root) return false
  return this._contains(this.root, word)
}

Trie.prototype._contains = function (node, word) {
  if (!node || !word) return false
  let letter = word.charAt(0)
  let child = node.children[letter]
  //look to see if the child branch exists for the word
  if (child) {
    let remainder = word.substring(1)
    //if there is a child branch, but there's no more letters for the word
    //&& this node.isWord = true, means that we have sucessfully come to the end of the word, so return true
    if (!remainder && child.isWord) return true
    //if there is a remainder or it isnt the end of the word
    //go further down the branch
    else return this._contains(child, remainder)

  } else {
    //if you went further down in the branch, but there isnt any more children, we can return false
    return false
  }
}



let myTrie = new Trie()
myTrie.add('boob');
myTrie.add('steve')



console.log(myTrie.contains('steve'))
myTrie.remove('boob')
console.log(myTrie.contains('boob'))
console.log(myTrie.contains('steve'))