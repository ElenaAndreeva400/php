// ПЕРВАЯ ЗАДАЧА

const arr = [7, 3, 8, -1, 2, 0, 6, 4, 5, 1];
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }

    let sum = 7;
    let first = 0;
  	let last = arr.length - 1;
  	while (first < last) {
  		let s = arr[first] + arr[last];
  		if (s == sum) {
  		console.log(arr[first] + " и " + arr[last]);
  			first++;
  			last--;
  		} else {
  		  	if (s < sum) {
            first++;
  	    	}	else {
         last--;
         }
        }
  		}



// ЗАДАЧА ВТОРАЯ
let iii = 0;
const result = [];

    while (iii < 100) {
      result.push(iii++);
    }


for (iii=0 ; iii < 100; iii++) {
  if (iii%3===0 && iii%5!==0) {
    result[iii] = "Three";
  } else if (iii%5===0 && iii%3!==0) {
     result[iii] = "Five";
   } else if (iii%15===0) {
     result[iii] = "ThreeFive";
   }
}
console.log(result);


// //ТРЕТЬЯ ЗАДАЧА
//
let tar=55;
let sredstvo = 9;
while (sredstvo>0 && tar>1) {
  console.log('После мытья ' + (--tar) + ' тарелок осталось ' + (sredstvo -= 0.5) + ' средства');
  //console.log(sredstvo -= 0.5);
} if (tar>sredstvo/0.5) {
  console.log("Средство закончилось, осталось немытыми " + (tar-sredstvo/0.5) + ' тарелок.');
} //else {
 //console.log("Все тарелки помыты, средства осталось " + (sredstvo - 0.5*tar));
//}
//-----------------

//ЧЕТВЕРТАЯ ЗАДАЧА

const array=[];
let sum1 = 0;
for (i=0; i<10; i++) {
let  i = Math.floor(Math.random()*100);
  array.push(i);
  sum1 += i;
}
let average = (sum1/i).toFixed(0)
console.log(array);
console.log("Среднее арифметическое первого массива равно " + average);

const array2=[];
let sum2=0;
for (j=0; j<10; j++) {
let j = Math.floor(Math.random()*100);
array2.push(j);
 sum2+= j;
}
let average2 = (sum2/j).toFixed(0);
console.log(array2);
console.log("Среднее арифметическое второго массива равно " + average2);
if (average>average2) {
   console.log("Среднее арифметическое первого массива больше с.а. второго.");
 } else {
   console.log("Среднее арифметическое второго массива больше с.а. первого");
 }
//
//  //____________________________________
//
// //Пятая задача, 2 подпункт
//
let t = 0;
  let xx = 1;
      while (t < 20){
          xx *= 2;
          console.log(xx);
          t++;
}

// //Пятая задача, 1 подпункт

// let arr = [];
// let b = prompt("Введите целое число");
// b = parseInt(b);
// arr.length = b;
// let i;
// for (i=0; i<b-1; i++){
// i = Math.floor(Math.random()*20)
//   arr.push(i);
//    }
// for (i=b-1; i>=0; --i) {
//   console.log(arr[i]);
// }
