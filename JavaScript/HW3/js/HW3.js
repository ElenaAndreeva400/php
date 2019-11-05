// первая задача
function sum(num) {
  if(num<10) {
    return num;
  } else {
    return (num%10 + Math.floor(sum(num/10)));
  }
}

console.log(sum(342));
// вторая задача
function range(start, end, step = 1) {
   let arr = [];
  for (let i=0; start <= end; i++, start+=step) {
    arr [i] = start;
    }
   return arr;
}
console.log(range(1,10,2));
console.log(range(2,10));

// третья задача
function days(num) {
  if (num%10 === 1) {
    console.log(num + " день");
  } else if (num%10 ===2 || num%10 ===3 || num%10 ===4) {
    console.log(num + " дня");
  } else {
    console.log(num + " дней");
  }
}
days(448);

// четвертая задача - доделаю на днях
let arr4 = [];
let sum1 = 0;
for (let j=0; j<9; j++) {
  arr4[j]= Math.floor(Math.random()*100);
  arr4.push(j);
  sum1 += arr4[j];
}
console.log(arr4);
console.log(sum1);

let arr42 = [];
let sum22 = 0;
for (let j=0; j<9; j++) {
  arr42[j]= Math.floor(Math.random()*100);
  arr42.push(j);
  sum22 += arr42[j];
}
console.log(arr42);
console.log(sum22);

let arr43 = [];
let sum33 = 0;
for (let j=0; j<9; j++) {
  arr43[j]= Math.floor(Math.random()*100);
  arr43.push(j);
  sum33 += arr43[j];
}
console.log(arr43);
console.log(sum33);

let arr44 = [];
let sum4 = 0;
for (let j=0; j<9; j++) {
  arr44[j]= Math.floor(Math.random()*100);
  arr44.push(j);
  sum4 += arr44[j];
}
console.log(arr44);
console.log(sum4);

let arr45 = [];
let sum5 = 0;
for (let j=0; j<9; j++) {
  arr45[j]= Math.floor(Math.random()*100);
  arr45.push(j);
  sum5 += arr45[j];
}
console.log(arr45);
console.log(sum5);

// let arraySum = [];
// for (i=0; i<5; i++) {
//   arraySum.push(sum1, sum22, sum33, sum4, sum5);
// }
// console.log(arraySum);
