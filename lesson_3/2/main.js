
const first = +prompt('Первое число');
const second = +prompt('Второе');

console.log(first);
console.log(second);
if (first<second){
    alert(second );
}
else if(second<first){
    alert(first);
}

else{
    alert('Числа равны'); 
}