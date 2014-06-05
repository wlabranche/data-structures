var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
<<<<<<< HEAD
  var someInstance = _.extend({_size:0, storage: {}}, queueMethods);
  return someInstance;
};

var queueMethods = {
  size: function() {
    return this._size;
  },
  enqueue: function(value) {
    this.storage[this._size] = value;
    this._size++;
  },
  dequeue: function(){
    var result = this.storage[0] || 0;

    if (this._size){
      for (var key in this.storage) {
        this.storage[key] = this.storage[+key + 1];
      }
      this._size--;
      delete this.storage[this._size];
    }

=======
  var result = {_size: 0, _storage: {}};
  return _.extend(result, queueMethods);
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
    var result = this._storage[0] || 0;
    if (result){
      for (var key in this._storage){
        this._storage[key] = this._storage[+key + 1];
      }
      delete this._storage[this._size];
      this._size--;
    }
>>>>>>> built functional-shared
    return result;
  }
};



