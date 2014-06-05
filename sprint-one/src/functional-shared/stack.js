var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var item = _.extend({_size: 0, storage: {}}, stackMethods);
  return item;
};

var stackMethods = {
  size: function(){
    return this._size;
  },
  push: function (val){
    this.storage[this._size] = val;
    this._size++;
  },
  pop: function(){
    var result = this.storage[this._size - 1] || 0;

    if(this._size) {
      this._size--;
      delete this.storage[this._size];
    }

    return result;
  }

};


