let age = +prompt('Введите год рождения!');

let result;
result = 2019 - age;
if (result>16 || result==16) {
    alert('Добро пожаловать! Вам ' + result);
}
else {
    alert('Вход воспрещен!');
}