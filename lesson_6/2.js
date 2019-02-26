
let users = ['Александр', 'ВаСя', 'АрТем', 'катя', 'ПАША'];

function getCapitalizedNameString (names) {

let lowerNames=[];

for (i=0; i< names.length; i++) {
    names[i] = names[i].charAt(0).toUpperCase() + names[i].substr(1).toLowerCase();
	lowerNames.push(names[i]);
}

return lowerNames;
}


let result = getCapitalizedNameString(users);
console.log(result);