function chooseDuty(name) {
    let str = name.split(" ");
    let randNum = Math.floor(Math.random() * str.length) + 0;
    return str[randNum] + ' сегодня дежурный в классе!'; 
}

let res = chooseDuty("Олег Сергей Петр Марина Олена");
console.log(res);