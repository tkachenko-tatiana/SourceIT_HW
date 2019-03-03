
function compareArrays(arr1, arr2){
    return arr1.length === arr2.length && arr1.sort().every(function(el, id){
         return el === arr2.sort()[id]});
}

let arr1 = [1, 2, 3];
let arr2 = [1, 3, 2];
console.log(compareArrays(arr1, arr2));  