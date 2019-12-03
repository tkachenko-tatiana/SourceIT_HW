function makeSpyOn(){
	function spy(...args){
		spy.calls++
	}
	spy.calls = 0;
	return spy;
}

const spy = makeSpyOn()
spy()
spy()
spy()
console.log(spy.calls)