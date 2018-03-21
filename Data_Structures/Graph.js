//adjacenyList

class Graph {
  constructor() {
    this.verticies = []
    this.edges = []
  }

  addVertext(vertext) {
    this.verticies.push(vertext)
    this.edges[vertext] = []
  }

  removeVertext(vertext) {
    //check to see if it is a real vertext
    let index = this.verticies.indexOf(vertext)
    //if real, remove vertext
    if (~index) this.verticies.splice(index, 1)
    while (this.edges[vertext].length) {
      let currentNeighbor = this.edges[vertext].pop()
      this.removeEdge(vertext, currentNeighbor)
    }
  }

  addEdge(start, end) {
    this.edges[start].push(end)
    this.edges[end].push(start)
  }

  removeEdge(start, end) {
    let startIndex = this.edges[start] ? this.edge[start].indexOf(end) : -1
    let endIndex = this.edges[end] ? this.edge[start].indexOf(start) : -1
    if (~startIndex) this.edges[start].splice(startIndex, 1)
    if (~endIndex) this.edges[end].splice(endIndex, 1)
  }

  depthFirstSearch(vertext, func) {
    if (!this.verticies[vertext]) console.log('Vertext not found')
    let visited = []
    this._depthFirstSearch(vertext, visited, func)
  }

  _depthFirstSearch(vertext, visited, func) {
    visited[vertext] = true
    if (this.edges[vertext]) func(vertex)
    for (let i = 0; i < this.edges[vertext].length; i++) {
      if (!visited[this.edges[vertext][i]]) {
        this._depthFirstSearch(this.edges[vertext][i], visited, func)
      }
    }
  }

  breadthFirstSearch(vertext, func) {
    if (!~this.verticies.indexOf(vertext)) console.log('vertext not found')
    let queue = [vertext]
    let visited = []
    visited[vertext] = true
    while (queue.length) {
      currentVertext = queue.shift()
      func(currentVertext)
      for (let i = 0; i < this.edges[currentVertext].length; i++) {
        let currentNeighbor = this.edges[currentVertext][i]
        if (!visited[currentNeighbor]) {
          visited[currentNeighbor] = true
          queue.push(currentNeighbor)
        }
      }
    }
  }
}