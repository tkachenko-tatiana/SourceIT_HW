'use strict'

let year = +prompt('Введите ваш возраст', '');

if (year >= 16) {
    alert('Вам ' + year + ' лет, добро пожаловать!!!')
} else {
    if (year == 1) {
        alert('Вам 1 годик, вход воспрещен :)') 
    } else if (year > 1 && year <= 4) {
        alert('Вам ' + year + ' годика, вход воспрещен :)')
    } else (
        alert('Вам ' + year + ' лет, вход воспрещен!!!')
    )
}