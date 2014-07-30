var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var result = Object.create(queueMethods);
  result._size = 0;
  result._storage = {};
  return result;
};

var queueMethods = {
  size: function(){
    return this._size;
  },

  enqueue: function(value){
    this._storage[this._size] = value;
    this._size++;
  },
  dequeue: function(){
    var result = this._storage[0] ||  0;
    if (result){
      for (var key in this._storage){
        this._storage[key] = this._storage[+key + 1];
      }
      delete this._storage[key];
      this._size--;
    }

    return result;
  }
};


