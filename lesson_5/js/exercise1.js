function calcNum(num) {
    let str = String(num);  // приводим к строке
    let newStr = str.split('');  //разбиваем на элементы массива
    let res = 0;
    for(let i = 0; i < newStr.length; i++) { //задаем цикл, который будет выполняться пока i будет меньше длины массива

        res += Number(newStr[i]);  // прибавляет переменную res к каждому элементу массива, после получения результата , переменная res перезаписывается и хранит результат действия
    }
    return res;
}

const sum = calcNum(135);
console.log(sum);