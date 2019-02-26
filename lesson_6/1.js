function isSpam (text, spamWords) {

let lowerText = text.toLowerCase();

for (i=0; i<=spamWords.length; i++){
 
if (lowerText.indexOf(spamWords[i]) !== -1){
	
  console.log("Есть спам: ", spamWords[i]);
  return true;
     }
  
   }
}
       


let result = isSpam("вы можете Купить у нас или сделать заказ через сайт", ["почта", "купить", "новинка", "продажа"]);
console.log(result);