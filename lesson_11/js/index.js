'use strict'

function deepClone(obj) {
    if(!(obj instanceof Object)){
      return obj;
    }
    
    let clone = {};
    
    for (let prop in obj) {
      clone[prop] = deepClone(obj[prop]);
    }
    
    return clone;
  }