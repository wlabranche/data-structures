var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  if (!this._storage.get(i)) {
    this._storage.set(i, [k, v]);
  }else{
    var temp = [this._storage.get(i)];
    temp.push([k, v]);
    this._storage.set(i, temp);
  }
  this._count++;

  if (this._count > this._limit * 0.75){
    this.buildHash(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i)){
    if (Array.isArray(this._storage.get(i)[1])){
      for (var index = 0; index < this._storage.get(i).length; index++){
        if (this._storage.get(i)[index][0] === k){
          return this._storage.get(i)[index][1];
        }
      }
    }
    else {
      return this._storage.get(i)[1];
    }
  }else{
    return null;
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (Array.isArray(this._storage.get(i))){
    this._storage.set(i, null);
  }else{
    var temp = this._storage.get(i);
    for (var index = 0; index < temp.length; index++){
      if (temp[index][0] === k){
        this._storage.set(temp[index][0], null);
      }
    }
  }
  this._count--;

  if (this._count < this._limit * 0.25){
    this.buildHash(this._limit * 0.5);
  }
};

HashTable.prototype.buildHash = function(limit){
  var newHashTable = new HashTable();
  newHashTable._limit = limit;
  newHashTable._storage = makeLimitedArray(limit);
  this._storage.each(function(pair){
    if (pair) {
      if (Array.isArray(pair[0])) {
        for (var i = 0; i < pair.length; i++) {
          newHashTable.insert(pair[i][0], pair[i][1]);
        }
      } else {
        newHashTable.insert(pair[0], pair[1]);
      }
    }
  });
  this._storage = newHashTable._storage;
  this._limit = limit;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
