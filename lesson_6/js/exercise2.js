function getCapilaziedNamesString(names) {

    let str = names.split(" ");
    let newStr = [];
    for(let i = 0; i < str.length; i++) {
        let a = str[i].substring(0, 1).toUpperCase(); 
        let b = str[i].substring(1).toLowerCase();
        let newArray = a.concat(b);
        newStr.push(newArray);
    }
    
    return newStr;
}

let res = getCapilaziedNamesString("mGeR олег мАша пЕТя");
console.log(res);