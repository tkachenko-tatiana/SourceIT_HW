let num = prompt('Введите число');
let itter = 0;
console.log(num)

 while(num < 1000) {
    itter = itter + 1;
    num = num * 2;
}
alert ('количество итераций ='+itter+' полученый результат ='+ num);