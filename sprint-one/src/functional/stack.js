var makeStack = function(){
  var someInstance = {};
  var size = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.pop = function(){
    if (someInstance) {
      size--;
    }
    var result = storage[size];
    delete storage[size];
    return result;
  };

  someInstance.size = function(){
    return size >= 0 ? size : size = 0;
  };

  return someInstance;
};
