'use strict'

const obj = {
    a: 12,
    b: 'i can do it',
    c: {
        d: {
            e: 14,
        },
        f: 'test'
    }
};

function deepClone(obj) {

    if(!(obj instanceof Object)){
      return obj;
    }

    let clone = {};

    for (let prop in obj) {
      clone[prop] = deepClone(obj[prop]);
    }

    return clone;
  };
  const clone = deepClone(obj);

  console.log(obj === clone);
  console.log(obj.c === clone.c);
  console.log(obj.c.d === clone.c.d);
