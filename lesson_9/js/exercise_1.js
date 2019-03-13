
function makeSpyOn() {
    let count = 0;
    function spy (){
        return count++;
    }
    spy.calls = function() {
        return count;
    }
    return spy;
}

const spy = makeSpyOn();
spy();
spy();

console.log(spy.calls()); // 2