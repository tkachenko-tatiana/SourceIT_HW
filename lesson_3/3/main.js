
let first;
let second;
let third;

const num = +prompt('введите номер подъезда')
console.log(num);

if (num<21 && num>0){
    alert('это первый подъезд')
}
else if(num<49 && num>20){
    alert('это второй подъезд')
}
else if(num<91 && num>48){
    alert('это третий подъезд')
}
else{
    alert('такой квартиры нет')
}