'use strict'
// Функция принимает какой-то текст и массив спам-слов. Функция должна вернуть true, если текст содержит слова из списка spamWords 
// или false если не содержит. Функция не должна быть чувствительна к регистру (если слово в списке спама "новинка", а в тексте "НоВиНкА" - то это спам)
let variousText = 'НоВиНкА!! Только у нас большие сКидкИ.';
let spamWord = ['скидки', 'новинка'];
let isSpam = (text, spamWords) => {
    let textLoverCase = text.toLowerCase();
    for (let i = 0; i < spamWords.length; i++){
        if (textLoverCase.indexOf(spamWords[i]) !== -1) 
            return true;
        else 
            return false;
    }
}
alert(isSpam(variousText, spamWord));