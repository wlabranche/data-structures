var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    //var  val = {value: value, front: value, back: null}
    var node = makeNode(value);

    if (!list.head){
      list.head = node;
      list.tail = list.head;
    }else{
      //else add add new tail & make that head too
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function(){
    var headResult = list.head.value;
    list.head = list.head.next;
    return headResult;
  };

  list.contains = function(target){

    var search = function(node){
      var result = false;

      if (node.value === target){
        result = true;
      }else if(node.next === null){
        return result;
      }else{
        return search(node.next);
      }

      return result;
    };

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
