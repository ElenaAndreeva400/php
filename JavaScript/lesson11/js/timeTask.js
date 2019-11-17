
let dateFromMoscow = moment('2019-11-17 17:30')// дата вылета
console.log(dateFromMoscow.format("LLL"));
dateFromMoscow.add(20, 'hours'); // время в полете Мск-Сидней 20 часов
console.log(dateFromMoscow.format("LLL"));
let arrivalTimeToSydney = dateFromMoscow.clone().tz('Australia/Sydney');
console.log(arrivalTimeToSydney.format("LLL")); // разница +8 часов
