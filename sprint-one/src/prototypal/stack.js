var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var result = Object.create(stackMethods);
  result._size = 0;
  result._storage = {};
  //console.log(result.size);
  return result;
};

var stackMethods = {
  size: function () {
    return this._size;
  },
  push: function(val){
    this._storage[this._size] = val;
    this._size++;
  },
  pop: function() {
    var result = this._storage[this._size - 1] || 0;

    if(this._size) {
      this._size--;
      delete this._storage[this._size];
    }

    return result;
  }
};


