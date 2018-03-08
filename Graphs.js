//bfs graph traversal

function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype.addVertext = function (vertext) {
  this.vertices.push(vertext);
  this.edges[vertext] = [];
};

Graph.prototype.removeVertext = function (vertext) {
  //remove the vertext
  let index = this.vertices.indexOf(vertext);
  if (~index) {
    this.vertices.splice(index, 1);
  }
  //remove all edges associated with vertext
  while (this.edges[vertext].length) {
    let currentNeighbor = this.edges[vertext].pop();
    this.removeEdge(vertext, currentNeighbor);
  }
};

Graph.prototype.addEdge = function (start, end) {
  this.edges[start].push(end);
  this.edges[end].push(start);
};

Graph.prototype.removeEdge = function (start, end) {
  //check if they are neighbors
  let startIndx = this.edges[start] ? this.edges[start].indexOf(end) : -1;
  let endIndx = this.edges[end] ? this.edges[end].indexOf(start) : -1;
  //~ -1 => 0, ~ is a -(n+1)
  //~(-1) is great for turning -1 return values to falsey
  if (~startIndx) {
    this.edges[start].splice(startIndx, 1);
  }
  if (~startIndx) {
    this.edges[end].splice(startIndx, 1);
  }
};

Graph.prototype.depthFirstSearch = function (vertext, func) {
  if (!this.vertices[vertext]) console.lot('Vertext not found');
  let visited = [];
  this._depthFirstSearch(vertext, visited, func);
};

Graph.prototype._depthFirstSearch = function (vertex, visited, func) {
  visited[vertex] = true;
  if (this.edges[vertex]) {
    func(vertex);
  }
  for (let i = 0; i < this.edges[vertex].length; i++) {
    if (!visited[this.edges[vertex][i]]) {
      this._depthFirstSearch(this.edges[vertex][i], visited, func);
    }
  }
};

Graph.prototype.breadthFirstSearch = function (vertext, func) {
  //if vertext doesn't exists = ~(-1) false => !(0) = truthy
  if (!~this.vertices.indexOf(vertext)) console.log('vertext not found');
  let queue = [vertext];
  let visited = [];
  visited[vertext] = true;
  while (queue.length) {
    currentVertext = queue.shift();
    func(currentVertext);
    for (let i = 0; i < this.edges[currentVertext].length; i++) {
      let currentNeighbor = this.edges[currentVertext][i];
      if (!visited[currentNeighbor]) {
        visited[currentNeighbor] = true;
        queue.push(currentNeighbor);
      }
    }
  }
};

Graph.prototype.pathFromTo = function (start, end) {
  if (!~this.vertices.indexOf(start)) {
    return console.log('Vertex not found');
  }
  let queue = [start];
  let visited = [];
  visited[start] = true;
  let paths = [];

  while (queue.length) {
    //take first node off of queue
    var vertex = queue.shift();
    for (let i = 0; i < this.edges[vertex].length; i++) {
      //go through all of it's neighbors
      let currentNeighbor = this.edges[vertex][i]
      //if neighbor has not been visited yet
      if (!visited[currentNeighbor]) {
        visited[currentNeighbor] = true;
        //push current neighbor onto queue
        queue.push(currentNeighbor);
        // save paths between vertices
        //add current neighbor to queue 
        paths[currentNeighbor] = vertex;
      }
    }
  }
  if (!visited[end]) {
    return undefined;
  }

  let path = [];
  for (var j = end; j != start; j = paths[j]) {
    //start at the end node, re-assign j 
    path.push(j);
  }
  path.push(j);
  return path.reverse().join('-');
};

Graph.prototype.size = function () {
  this.vertices.length;
};

function squareNum(val) {
  console.log(val * val);
}

let myGraph = new Graph();
myGraph.addVertext(4);
myGraph.addVertext(3);
myGraph.addVertext(2);
myGraph.addVertext(1);
myGraph.addVertext(5);
myGraph.addVertext(6);
myGraph.addVertext(7);
myGraph.addEdge(4, 3);
myGraph.addEdge(1, 3);
myGraph.addEdge(1, 2);
myGraph.addEdge(2, 3);
myGraph.addEdge(4, 5);
myGraph.addEdge(6, 5);
myGraph.addEdge(6, 7);

console.log(myGraph.pathFromTo(1, 7));
console.log('myGraph', myGraph)
