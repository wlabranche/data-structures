var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if (!this._storage){
    this._storage = {};
  }
  if(!this._storage[item]){
    this._storage[item] = true;
  }
};

setPrototype.contains = function(item){
  return !!this._storage[item];
};

setPrototype.remove = function(item){
  if (this.contains(item)){
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
