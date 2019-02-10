let x = +prompt('Введите значение х');
let result;

if (x<-2) {
    result = 3 * x**2 - 8;
    alert('Корень уравнения = ' + result);
}
else if(x >= -2 &&  x <= 4) {
    result = -9 * x**2 - 12;
    alert('Корень уравнения = ' + result);
}
else {
    result = 32 + x;
    alert('Корень уравнения = ' + result);
}
