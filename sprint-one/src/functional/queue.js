var makeQueue = function(){
  var someInstance = {};
  var size = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function(){
    var result =  storage[0];

    for (var key in storage) {
      storage[key] = storage[+key + 1];
    }
    size--;

    return result;
  };

  someInstance.size = function(){
    return size <= 0 ? size = 0 : size;
  };

  return someInstance;
};
