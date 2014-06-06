var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);
    
    if (!list.head){
      list.head = list.tail = node;
    }else{
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function(){

    var result = list.head.value;

    list.head = list.head.next;

    return result;
  };

  list.contains = function(target){
    var search = function(node){
      return node.value === target ? true : node.next === null ? false : search(node.next);
    }

    return search(list.head);
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
