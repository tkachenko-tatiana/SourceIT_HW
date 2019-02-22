'use strict'

console.log("task_1");

function isSpam (text, spamwWords) {
    for(let elem of spamwWords) {
        if(elem.toLowerCase() == text.toLowerCase()) {
            return true;
        }
    }
    return false;
};

let arrWordrs = ["приВет", "поКа", "каК дела", "подПишись", "котОрый час"];
console.log(isSpam("Подпишись", arrWordrs));
console.log("===================================================================================");

console.log("task_2");

function getCapitalizedNamesString (names) {
    for (let i = 0; i < names.length; i++) {
        names[i] = names[i][0].toUpperCase() + names[i].substr(1).toLowerCase();
    }
    return names.join(", ");
}

let arrNames = ["оксАна", "саШа", "таНя", "юРа", "ИГорь", "денис"];
console.log(getCapitalizedNamesString(arrNames));
console.log("===================================================================================");

console.log("task_3");

function chooseDuty (names) {
   let bingo = Math.floor( Math.random() * names.length);
   return names[bingo];
}

let names = ["Оксана", "Саша", "Таня", "Юра", "Игорь", "Денис"];
console.log(chooseDuty(names));
console.log("===================================================================================");

console.log("task_4");

function cutText (srt, n) {
   let result = "";
   if(srt.length < n) {
      return result += srt;
   } else {
      return result = srt.substring(0, n) + "..."
   }
}

let text = "Значимость этих проблем настолько очевидна, что постоянное информационно-техническое обеспечение нашей деятельности требует от нас системного анализа системы масштабного изменения ряда параметров";
console.log(cutText(text, 327))

console.log("===================================================================================");

console.log("task_6");

let date = "2025-12-31";

function convertDate (date) {
 let arrDate = date.split("-");
 arrDate.reverse();
 let dateNewFormat = arrDate.join(".");
 return dateNewFormat;
}
console.log(convertDate(date));

console.log("===================================================================================");