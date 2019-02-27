'use strict'
/* first*/
function calls() {
function spy() {
return spy.calls++;
};
spy.calls=0;
return spy;
}
let spy= calls();

spy();
spy();
spy();
spy();

console.log(spy.calls)

/*second*/
function Calculate() {
let numFirst ;
let numSecond ;
	function input() {
	 numFirst  = prompt('Enter first number ');
	 numSecond = prompt('Enter second number ');
	}
	function sum() {
	return numFirst + numSecond;
	}
	function mul() {
	return numFirst* numSecond;
	}	
	function sub() {
	return numFirst - numSecond;
	}
	 return {
    input: input,
    sum: sum,
    mul: mul,
    sub: sub
  }
}
 const calculator = Calculate();

console.log(calculator.input());
console.log(calculator.sum());
console.log(calculator.mul());
console.log(calculator.sub());


/*fourth*/
function  GenFun() {
  let all = [];
  function  Generate() {
    let min = 1;
    let max = 11;
    let num = Math.floor(Math.random() * (max - min)) + min;
    if (all.includes(num)) {
      return all;
    } else {
      all.push(num);
      return num;
    }
  }
  return Generate;
}
const final = GenFun();
console.log(final());
console.log(final());
console.log(final());
console.log(final());
console.log(final());
console.log(final());
console.log(final());
console.log(final());
console.log(final());
console.log(final());
console.log(final());
console.log(final());
console.log(final());
console.log(final());
console.log(final());










