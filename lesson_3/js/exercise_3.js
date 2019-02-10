    let numApartment = prompt('Введите номер квартиры');

    if (numApartment<21) {
        alert('Данная квартира находиться в 1-ом подъезде');
    }
    else if (numApartment>20 && numApartment<49) {
        alert('Данная квартира находиться во 2-ом подъезде');
    }
    else if (numApartment>48 && numApartment<90) {
        alert('Данная квартира находиться в 3-ем подъезде');
    }
    else {
        alert('Данной квартиры нет!');
    }