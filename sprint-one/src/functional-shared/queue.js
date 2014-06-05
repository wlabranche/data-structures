var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = _.extend({storage: {}, len:0}, queueMethods);
  return someInstance;
};

var queueMethods = {
  size: function() {
    return this.len;
  },
  enqueue: function(value) {
    this.storage[this.len] = value;
    this.len++;
  },
  dequeue: function(){
    if (this.len >= 1){
      var result = this.storage[0];
      for (var key in this.storage) {
        this.storage[key] = this.storage[+key + 1];
      }
      this.len--;
      delete this.storage[this.len];
      return result;
    }else{
      return 0;
    }
  }



};



