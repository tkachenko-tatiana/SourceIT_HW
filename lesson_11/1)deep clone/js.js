let obj1 = {
	name: "Dima",
	surname: 'Sigarev',
	a: {
    b: {
      c: true,
    },
}
}

console.log(obj1)


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
console.log(deepClone(obj1))

