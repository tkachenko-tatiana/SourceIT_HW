let date = '2025-12-31';

function convertDate(date) {
    let res = date.split('-').reverse().join('.');
    return res;
}


let result = convertDate(date);
console.log(result);