let arr1 = [1,2,3];
let arr2 = [1, 3, 2];

function compareArrays(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }

    let newArr1 = arr1.sort();
    let newArr2 = arr2.sort();

    for (i = 0; i < newArr1.length; i++) {
        if (newArr1[i] != newArr2[i]) {
            return false;
        }
    }

    return true;
}

let res = compareArrays(arr1, arr2);
console.log(res);