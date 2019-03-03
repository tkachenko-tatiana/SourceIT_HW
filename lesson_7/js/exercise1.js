function trueLength(array) {
    const result = array.filter((el) => {
        return el != null;
    })
    return result.length;
}

let array = [1,2,3,undefined,,,null,,,,11];
console.log(trueLength(array));  