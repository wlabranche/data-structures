var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  console.log(i);
  //
  if (!this._storage.get(i)) {
    this._storage.set(i, [k, v]);
  }else{
    var temp = [this._storage.get(i)];
    temp.push([k, v]);
    this._storage.set(i, temp);


    // var tempStore = [];
    // // iterate through old store -> extract the arrays into temp store
    // this._storage.each(function(element, pos, stor){
    //   tempStore.push(element);
    // });
    // // calculate + assign new length
    // this._limit *= 2;
    // // build empty new hash + assign / replace the current one
    // //
    // this._storage = makeLimitedArray(this._limit);

    // for(var index = 0; index < tempStore.length; index++){
    //   //console.log('hellooo!!!')
    //   this.insert(tempStore[index][0], tempStore[index][1]);
    // }
    // i = getIndexBelowMaxForKey(k, this._limit);
    // this._storage.set(i, [k, v]);
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
    return this._storage.get(i);
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
