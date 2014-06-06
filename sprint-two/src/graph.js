var Graph = function(){
  this._storage = {};
  this._count = 0
  this._latest = null;
};

Graph.prototype.addNode = function(newNode, toNode){
  this._storage[newNode] = {};
  this._storage[newNode][this._count] = newNode;
  if (this._count === 1 && !toNode){
    this.addEdge(newNode, this._latest);
  }if (toNode){
    this.addEdge(newNode, toNode);
  }
  this._latest = newNode;
  this._count++;
};

Graph.prototype.contains = function(node){
  return !!this._storage[node];
};

Graph.prototype.removeNode = function(node){
  if (this._storage[node]){
    delete this._storage[node];
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return !!this._storage[fromNode][toNode] && !!this._storage[fromNode][toNode];
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this._storage[fromNode][toNode] = true;
  this._storage[toNode][fromNode] = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this._storage[fromNode][toNode];
  delete this._storage[toNode][fromNode];
  if (Object.keys(this._storage[fromNode]).length === 1){
    this.removeNode(fromNode);
  }
  if (Object.keys(this._storage[toNode]).length === 1){
    this.removeNode(toNode);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
