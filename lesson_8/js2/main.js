function sequence(start, step) {
    let a = start;
    let b = step;

     return function gen() {

         if(b == undefined) {
            b = 1;
        }
            a = a + b;
        return a;
    }
};

const generator = sequence(10, 3);
const generator2 = sequence(50, 25);
const generator3 = sequence(100);

console.log(generator());
console.log(generator());