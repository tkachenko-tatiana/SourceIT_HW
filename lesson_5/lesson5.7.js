function sum() {
    var result = 0;
  
    for (var i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
  
    return result;
  }
  
  
  console.log(sum(1,2)) // 3
console.log(sum(1,2,3)) //6
console.log(sum(1,2,3,4,5)) // 15
