var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var item = _.extend({len: 0, storage: {}}, stackMethods);
  return item;
};

var stackMethods = {
  size: function(){
    return this.len;
  },
  push: function (val){
    this.storage[this.len] = val;
    this.len++;
  },
  pop: function(){
    if(this.len) {
      this.len--;
    } else{
      this.len = 0;
    }
    var result = this.storage[this.len];
    delete this.storage[this.len];
    return result;
  }

};


