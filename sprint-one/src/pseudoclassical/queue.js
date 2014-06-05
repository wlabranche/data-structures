var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._size = 0;
  this._storage = {};
};
Queue.prototype.size = function(){
  return this._size;
};
Queue.prototype.enqueue = function(value){
  this._storage[this._size] = value;
  this._size++;
};
Queue.prototype.dequeue = function(){
  var result = 0;
  if (this._size){
    this._size--;
    result = this._storage[0];
    for (var key in this._storage){
      this._storage[key] = this._storage[+key + 1];
    }
    delete this._storage[this._size];
  }
  return result;
};


