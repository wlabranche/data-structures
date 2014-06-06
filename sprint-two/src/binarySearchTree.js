var makeBinarySearchTree = function(value){
  var binaryTree = Object.create(binaryMethods);
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;
  return binaryTree;
};


var binaryMethods = {};

binaryMethods.insert = function(value){
  var search = function(node){
    if (node.value > value){
      if (node.left === null){
        node.left = makeBinarySearchTree(value);
      }else{
        search(node.left);
      }
    }else if(node.value < value){
      if (node.right === null){
        node.right = makeBinarySearchTree(value);
      }else{
        search(node.right);
      }
    } 
  };
  search(this);
  console.log(this);
};

binaryMethods.contains = function(target){
  var result = false;
  var search = function(node){
    if (node.value === target){
      result = true;
    }else{
      if (node.left){ search(node.left); }
      if (node.right){ search(node.right); }
    }
  }
  search(this);
  return result;
};

binaryMethods.depthFirstLog = function(func){
  var search = function(node){
    func(node.value);
    if (node.left){ search(node.left); }
    if (node.right){ search(node.right); }
  }
  search(this);
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
