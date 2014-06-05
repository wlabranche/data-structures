var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
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

    return result;
  }
};



