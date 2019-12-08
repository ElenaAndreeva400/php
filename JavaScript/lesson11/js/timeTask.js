
let dateFromMoscow = moment('2019-12-28 22:15')// дата вылета
console.log(dateFromMoscow.format("LLL"));
dateFromMoscow.add(10, 'hours'); // время в полете Мск-Нью-Йорк 10 часов
console.log(dateFromMoscow.format("LLL"));
let arrivalTimeToNY = dateFromMoscow.clone().tz('America/New_York');
console.log(arrivalTimeToNY.format("LLL")); // разница -8 часов
