let text = 'You should BuY our New brand jackets, it us on SalEs!';
let spam = ['buy', 'new', 'sales'];

function isItSpam(text, spam) {
    let arr = text.toLowerCase().split(' ');
    let matches = [];
    for (let i=0; i<spam.length; i++) {
        matches[i] = arr.some(currentValue => currentValue == spam[i]);
        }

    let boolen = matches.some(function(item){
        return item == true
    }); 
     console.log(boolen);
};
isItSpam(text, spam);