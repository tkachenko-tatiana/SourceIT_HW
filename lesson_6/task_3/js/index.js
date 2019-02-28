'use strict'
// Функция принимает массив имен. Функция должна выбрать случайное имя из массива и вернуть строку: “{{Имя}} сегодня дежурный в классе.”
let arrayNames = ['Петя', 'Ваня', 'Анна', 'Светлана', 'Костя', 'Юля', 'Сергей', 'Люба'];
function chooseDuty(names){
    return names[Math.floor(Math.random() * names.length)];
}
alert(chooseDuty(arrayNames) + ' сегодня дежурный(-ая) в классе.');