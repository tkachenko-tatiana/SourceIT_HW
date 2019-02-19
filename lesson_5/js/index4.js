function getEvenElements (arr) {
    let arrCopy =[];

    for(let i = 0; i < arr.length; i++) {
        if( (arr[i] % 2) === 0) {
            arrCopy.push(arr[i]);
        }
    }

    return arrCopy;
}

console.log(getEvenElements ([1,2,3,4,5,6]));