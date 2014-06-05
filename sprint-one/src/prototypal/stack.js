var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var result = Object.create(stackMethods);
  result._size = 0;
  result._storage = {};
  return result;
};

var stackMethods = {
  size: function(){
    return this._size;
  },
  push: function(value){
    this._storage[this._size] = value;
    this._size++;
  },
  pop: function(){
    var result = 0;
    if (this._size){
      this._size--;
      result = this._storage[this._size] || result;
      delete this._storage[this._size];
    }
    return result;
  }
};


