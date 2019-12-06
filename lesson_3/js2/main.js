const number_1 = prompt('Первое число');
const number_2 = prompt('Второе');

 console.log(number_1);
console.log(number_2);

if (number_1<number_2){
    alert(number_2);
}

else if(number_2<number_1){
    alert(number_1);
}

 else {
      alert('Числа равны'); 
}
