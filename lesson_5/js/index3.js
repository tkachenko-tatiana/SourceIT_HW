function joinArrays (arr1, arr2) {
    let newArray = [...arr1];
    newArray = newArray.concat(arr2);
    return newArray
}

console.log(joinArrays([1,3,5], [5, 7, 3]));
console.log("=========================================================================");