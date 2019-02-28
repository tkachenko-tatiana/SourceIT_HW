'use strict'

// 1. Функция принимает какой-то текст и массив спам-слов. 
// Функция должна вернуть true, если текст содержит слова из списка spamWords или false если не содержит. 
// Функция не должна быть чувствительна к регистру (если слово в списке спама "новинка", а в тексте "НоВиНкА" - то это спам)

let arrSpamWords = ["спам", "правило", "новинка", "порядок"];
  
function isSpam (text, spamWords) {

  let lowerText = text.toLowerCase();
  
  for ( let i = 0; i <= spamWords.length; i++){
    if (lowerText.indexOf(spamWords[i]) !== -1){
      console.log("Спам-слово: ", spamWords[i]);
      return true;
      }
    }
    return false;
  }
  
let result = isSpam("Если убрать СПАМ-слово, всё будет в порядке", arrSpamWords);

console.log(result);
alert(result);



// 2. Функция принимает массив имен. Имена могут быть в любом виде: пЕтя, Артём, катя, МаШа. 
// Функция должна вернуть строку с нормализованными именами, разделенными запятой и пробелом: "Петя, Артём, Катя, Маша"

function getCapitalizedNameString(names) {
  for (let i = 0; i < names.length; i++) {
    names[i] = names[i][0].toUpperCase() + names[i].slice(1).toLowerCase();
  }
  return names;
}

let arrAllNames = ["пЕтя", "Артём", "катя", "МаШа"];

console.log(getCapitalizedNameString(arrAllNames));
alert( getCapitalizedNameString(arrAllNames) );



// 3. Функция принимает массив имен. 
// Функция должна выбрать случайное имя из массива и вернуть строку: “{{Имя}} сегодня дежурный в классе.”

let names = ["Катя", "Игорь", "Маша", "Дима", "Оля", "Саша", "Лера", "Юра"];

function chooseDuty(names) {
  let duty = Math.floor(Math.random() * names.length);
   return names[duty];
}

console.log( chooseDuty(names) );
alert( chooseDuty(names) );



// 4. Реализуйте функцию, которая обрезает длинный текст по следующему принципу: 
// если количество символов этого текста больше заданного в аргументе n, то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. 
// В противном случае в переменную result запишем содержимое переменной str. Функция должна вернуть result.

function cutText (str, n) {
  n = 7;
  let result = str; 
  if (str.length > n) {
    return str.slice(0, n) + "...";
  }
  return result;
}

console.log( cutText("Параллелепипед") );
alert( cutText("Параллелепипед") );



// 5. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.

var d = Date(2025-11-31);

function convertDate(date) {

  var dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  var yyyy = date.getFullYear();
  if (yyyy < 10) yyyy = '0' + yyyy;

  return dd + '.' + mm + '.' + yyyy;
}

var d = new Date(2025,11,31);
console.log( convertDate(d) );
alert( convertDate(d) );