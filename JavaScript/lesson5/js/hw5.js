let goods = [
        {
            title: "Пианино",
            price: 3000,
            count: 25
        },
        {
            title: "Гитара",
            price: 1200,
            count: 40
        },
        {
            title: "Барабаны",
            price: 2700,
            count: 12
        },
        {
            title: "Флейта",
            price: 900,
            count: 50
        },
        {
            title: "Арфа",
            price: 3400,
            count: 5
        }
];
// Первая задача
function generateTable(obj, from, to) {
  // let resGoods = [];
   for (let i in obj) {
     if (obj[i].price >= from && obj[i].price <= to) {
       console.log(obj[i].title + " цена " + obj[i].price);
     }
   }
}
generateTable(goods, 2000, 3000);

// Вторая задача
function addToCart(obj, titleToCart, countToCart) {
 for (let i in obj) {
   if (obj[i].count > countToCart){
     console.log("Заказ оформлен " + titleToCart);
       obj[i].count -= countToCart;
   } else {
      console.log(titleToCart + " недостаточно");
   }
 }
}
addToCart(goods, "Флейта", 8);


// Третья задача
let books = [
  { author: 'Толстой', title: 'Война и мир'},
  { author: 'Гончаров', title: 'Обломов'},
  { author: 'Лермонтов', title: 'Герой нашего времени'},
]

function bookSort(arr) {
  arr.sort((a,b) => a.title.localeCompare(b.title));
}
bookSort(books);
console.log(books);
