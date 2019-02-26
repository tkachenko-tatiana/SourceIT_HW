let str = "Без труда не вытащишь и рыбку из пруда";
let result = '';

function cutText(str, n) {

    if (str.length > n) {

        result = str.substring(0, n) + "...";
    }

    return result;
}


cutText(str, 9);
console.log(result);