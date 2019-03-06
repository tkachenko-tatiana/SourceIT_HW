let arr = [2, , 4, 6, , ];

function truLength(arr) {

    let newArr = arr.filter(function(el) {
        return el != null;
    });

    return newArr.length;

}

let res = truLength(arr);
console.log(res);