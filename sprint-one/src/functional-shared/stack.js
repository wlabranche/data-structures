var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var result = {_size: 0, _storage: {}};
  return _.extend(result, stackMethods);
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

