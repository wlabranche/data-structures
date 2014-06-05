var makeStack = function(){
  var someInstance = {};
  var _size = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.size = function(){
    return _size;
  };


  someInstance.push = function(value){
    storage[_size] = value;
    _size++;
  };

  someInstance.pop = function(){
    var result = storage[_size - 1] || 0;

    if (_size) {
      _size--;
      delete storage[_size];
    }

    return result;
  };


  return someInstance;
};
