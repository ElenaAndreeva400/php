let number = Math.floor(Math.random()*100);
number % 2 === 0 ? console.log(number + ' это четное число') : console.log(number + ' это нечетное число');

let m = Math.random()*100;
mRounded = parseFloat(m.toFixed(2));
let n = Math.random()*100;
nRounded = parseFloat(n.toFixed(2));

(10 + n) < (10 + m) ? console.log(nRounded + ' это число ближайшее к 10, другое число ' + mRounded) : console.log(mRounded + ' это число ближайшее к 10, другое число ' + nRounded);

let a = Math.floor(Math.random()*100);
let b = Math.floor(Math.random()*100);
let c = Math.floor(Math.random()*100);

console.log('S=' + 2*(a*b + b*c + a*c) + ', где a = ' + a + ', b = ' + b + ', c = ' + c);
a > c ? console.log('ширина a ' +  a  + ' см больше высоты c на ' + (a - c) + ' см.') : console.log('высота c ' +  c  + ' см больше ширины a на ' + (c - a) + ' см.');
