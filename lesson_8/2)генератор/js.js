function sequence(start, step) {
    start = start || 0;
    step = step || 1;
    start -= step;
    return function() {
        return start += step;
    }
}
const generator = sequence(10,3);
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());