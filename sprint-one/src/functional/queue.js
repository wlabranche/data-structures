var makeQueue = function(){
  var someInstance = {};
  var _size = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.size = function(){
    return _size <= 0 ? _size = 0 : _size;
  };

  someInstance.enqueue = function(value){
    storage[_size] = value;
    _size++;
  };

  someInstance.dequeue = function(){
    var result =  storage[0] || 0;

    if (_size){
      for (var key in storage) {
        storage[key] = storage[+key + 1];
      }
      _size--;
      delete storage[_size];
    }

    return result;
  };

  return someInstance;
};
