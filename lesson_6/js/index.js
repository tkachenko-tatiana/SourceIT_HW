'use strict'

// Task 1  =================================================
const isSpam = (text, spamWords) => {

  let textLower = text.toLowerCase();

  let sum;

  for (let i = 0; i < spamWords.length; i++) {
    sum = textLower.indexOf(spamWords[i]);

    if (sum >= 0) {
      sum = true;
      break;
    } else {
      sum = false;
    }
  };

  return sum;
}

console.log(isSpam(
  'Только сегодня! лучшая СКИДКА на новые пылесосы!',
  ['новинка', 'акция', 'скидка', 'sale', 'купить', 'заработай', 'дешево', 'бесплатно', 'похудение']
));


// Task 2  =================================================
const getCapitalizedNamesString = (names) => {

  return names.map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase()).join(', ');

}

console.log(getCapitalizedNamesString(
  ['ПетЯ', 'ТёМа', 'КАтя', 'Маша', 'Саша', 'ВИтя', 'МАГА']
));


// Task 3  =================================================
const chooseDuty = (names) => names[Math.floor(Math.random() * names.length)];

console.log(chooseDuty(['Саня', 'Влад', 'Дима', 'Бодя', 'Тёма', 'Тоша']));


// Task 4  =================================================
const cutText = (str, n) => {

  let result = str.substring(0, n);

  if (str.length > n) {
    return result += '...';
  } else {
    return result;
  }

}

console.log(cutText('Вася пупкин пришел собирать помидоры к бубеле в соседнюю деревню', 55));


// Task 5  =================================================
const converDate = (date) => date.split(/\s*-/).reverse().join(".");

console.log(converDate('2025-12-31'));