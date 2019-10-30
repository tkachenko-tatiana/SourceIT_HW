'use strict'
const obj = {
  a: 12,
  b: 'I can do it',
  c: {
    d: {
      e: 14,
    },
    f: 'test'
  }
}
 
function deepClone(obj) {
  if (typeof obj === 'object') {
    return Object.keys(obj)
    .map(function(item) {return {[item] : deepClone(obj[item])}})
    .reduce(function(a, b) {return Object.assign(a, b)});
  } else {
    return obj;
  }
}
 
const clone = deepClone(obj);
console.log(obj === clone) // should be false
console.log(obj.c === clone.c) // should be false
console.log(obj.c.d === clone.c.d) // should be false