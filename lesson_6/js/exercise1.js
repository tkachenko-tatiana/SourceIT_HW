function isSpam(text, spamWords) {
    let search = spamWords.some(function(el) {
        if (text.toLowerCase().includes(el.toLowerCase())) {
            return true;
        } else {
            return false;
        }
    });
    return search;
}

let text = "Привет, меня зовут зовут Мгер. Я учу JavaScript уже на протяжении года.";
let spamWords = ["javascript", "мгер", "пРивЕТ"];
let res = isSpam(text, spamWords);
console.log(res);