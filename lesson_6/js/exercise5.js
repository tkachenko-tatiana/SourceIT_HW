function convertDate(date) {
    let result = date.toLocaleString('ru', {year: '2-digit', month: 'numeric', day: 'numeric'});
    return result; 
}

let date = new Date(2025, 11, 31);
let res = convertDate(date);
console.log(res);