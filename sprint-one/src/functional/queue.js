var makeQueue = function(){
  var someInstance = {};
  var _size = 0;

  // Use an object with numeric keys to store values
  var storage = {};
  var size  = 0;
  // Implement the methods below
  someInstance.size = function(){
    return _size <= 0 ? _size = 0 : _size;
  };

  someInstance.enqueue = function(value){

    storage[size] = value;
    size++;

  };
  someInstance.dequeue = function(){

    var result = storage[0];
    if (size){
      for (var key in storage){
          storage[key] = storage[+key + 1];
        }
        delete storage[size];
        size--;
      }
    return result;
  };

  someInstance.size = function(){
    return size;

  };

  return someInstance;
};
