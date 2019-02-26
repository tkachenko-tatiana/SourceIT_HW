
let users = ['Александр', 'Ваcя', 'Артем', 'Катя', 'Паша'];

function chooseDuty (names) {

let rand = Math.floor(Math.random() * users.length);

return users[rand];
}


let result = chooseDuty(users);
console.log(result + " сегодня дежурный в классе");

