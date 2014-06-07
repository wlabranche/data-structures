var makeBinarySearchTree = function(value){
  var binaryTree = Object.create(binaryTreeMethods);
  binaryTree.left = null;
  binaryTree.right = null;
  binaryTree.value = value;

  return binaryTree;
};

binaryTreeMethods = {};

binaryTreeMethods.insert = function(val){
  var search = function (node) {
    if (node.value < val) {
      if (node.right){
        search(node.right);
      }else{
        node.right = makeBinarySearchTree(val);
      }
    }else if(node.value > val) {
      if (node.left){
        search(node.left);
      }else{
        node.left = makeBinarySearchTree(val);
      }
    }
  };
  search(this);
};
binaryTreeMethods.contains = function(target){
  var result = false;
  var search = function (node) {

    if (node.value === target) {
      result = true;
    } else if (node.value < target && node.right){
      search(node.right);
    } else if (node.value > target && node.left){
      search(node.left)
    }
  };

  search(this);
  return result;
};
binaryTreeMethods.depthFirstLog = function(callback){
  var search = function (node) {
    callback(node.value);
    if (node.left){
      search(node.left);
    }
    if (node.right){
      search(node.right);
    }
  };
  search(this);
};







/*
 * Complexity: What is the time complexity of the above functions?
 */
