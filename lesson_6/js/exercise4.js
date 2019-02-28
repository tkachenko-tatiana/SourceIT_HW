function cutText(srt, n) {
    let result;
    if(srt.length > n){
        result = srt.slice(0, n) + "...";
    } else {
        result = srt;
    }

   return result;
}

let srt = "Привет, мир! Меня зовут Мгер!";
let res = cutText(srt, 22);
console.log(res);
