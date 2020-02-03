let articles = [
    {
        id: 1,
        title: "JS",
        text: "Статья про JS",
        author: "Александр"
    },
    {
        id: 2,
        title: "PHP",
        text: "Статья про PHP",
        author: "Виталий"
    },
    {
        id: 3,
        title: "Базы Данных",
        text: "Статья про Базы Данных",
        author: "Евгения"
    },
    {
        id: 4,
        title: "HTML",
        text: "Статья про HTML",
        author: "Виталий"
    }
];

const goods = [
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

function createTable(array) {
      let table = document.createElement("table");
      let firstObjectLength = Object.keys(array[0]).length;
      let row = table.insertRow();
      for (let title = 0; title < firstObjectLength; title++) {
          let cell = row.insertCell();
          cell.innerHTML = Object.keys(array[0])[title].toUpperCase();
  }

  for (let i = 0; i < array.length; i++) {
      let row = table.insertRow();
      console.log(row);
      for (let j = 0; j < firstObjectLength; j++) {
          let cell = row.insertCell();
          console.log(cell);
      cell.innerHTML = Object.values(array[i])[j];
          
     }
  }

  document.body.append(table);

  table.rows[0].addEventListener('click', sorting);

  function sorting(event) {
        let elements = event.target.innerHTML.toLowerCase();
        let arr =  array.sort((a, b) => a[elements] > b[elements] ? 1 : a[elements] < b[elements] ? -1 : 0);
        table.remove();
        createTable(arr);
  }
}

createTable(articles);
//createTable(goods);