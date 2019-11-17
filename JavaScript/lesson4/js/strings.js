//Второй (=первый) номер дз 4-го урока
let strr = prompt("Введите названия городов", "");
let newStrr = strr.split(" ");
let y = newStrr.sort();
let x = y.join(' ');
console.log(x);

// Третий номер дз 4-го урока

let strrr = prompt("Введите строку", "");
let target = prompt("Введите подстроку", "");

let pos = -1;
while ((pos = strrr.indexOf(target, pos + 1)) != -1) {
  console.log(pos);
}

// Четвертый номер дз 4-го урока

function findPalindrom(phrase) {

let ourStr = phrase.toLowerCase();
let newS = ourStr.split(" ").join("");
//console.log(newS);
let strRev = "";
for (i = newS.length-1; i>=0; i--) {
 strRev += newS[i];
  }
if (newS != strRev) {
  console.log("Это не палинром");
  } else if (newS === strRev){
console.log("Это палиндром");
  }
}

findPalindrom("А роза упала на лапу Азора");
