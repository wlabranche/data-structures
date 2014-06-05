var makeStack = function(){
  var someInstance = {};
  var _size = 0;

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.size = function(){
    return _size;
  };


  someInstance.push = function(value){

    storage[size] = value;
    size++;
  };

  someInstance.pop = function(){
    if (size){
      size--;
    }
    var temp = storage[size];
    delete storage[size];
    return temp;
  };

  someInstance.size = function(){
    return size;

  };


  return someInstance;
};
