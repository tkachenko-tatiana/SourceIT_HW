let names = ['пЕтя', 'Артём', 'катя', 'МаШа', 'ДиМа'];

function func(x){
	for(let i = 0; i < x.length; i++) {
 let input = x[i];
 let lower = input.toLowerCase();
 let firstLetter = lower.slice(0,1);
 let capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());
 let result = capitalized;
 console.log(result)

}
}
func(names);





