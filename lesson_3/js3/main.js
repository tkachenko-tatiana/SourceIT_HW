let first;
let second;
let third;

 const num = prompt('Введите номер квартиры')
console.log(num);

 if (num<=20 && num>=1){
    alert('Первый подъезд')
}
else if(num<=48 && num>=21){
    alert('Второй подъезд')
}
else if(num<=90 && num>=49){
    alert('Третий подъезд')
}
else{
    alert('Такой квартиры нет')
}