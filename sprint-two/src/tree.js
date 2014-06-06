var makeTree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = undefined;
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  if(!this.children){
    this.children = [];
  }
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){

  var result = false;
  var search = function (node) {
    if (node.value === target) {
      result = true;
    } else if (node.children) {
      for (var index = 0; index < node.children.length; index++) {
        search(node.children[index]);
      }
    }
  };
  search(this);
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
