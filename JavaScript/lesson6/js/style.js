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
function createTable(arr, parentElement) {
let table = document.getElementsByTagName("body")[0]
.appendChild(document.createElement("table"));
    // создаем пустую ячейку в верхнем левом углу таблицы
let row = table.insertRow(0);
let cell = row.insertCell(0);
let pos = -1;

    //создаем наименования столбцов
for(let name in arr[0]) {
     name = name.toUpperCase();
        pos += 1;
        cell = row.insertCell(pos);
        cell.innerText = name;
      };
      // создаем ряды по количеству объектов и заполняем их значениями
    for (let obj=0; obj<arr.length; obj++ ) {
      let tr = table.insertRow();
      for (let prop in arr[obj]) {
        let td = tr.insertCell();
        let cellTd = td.appendChild(document.createElement("cell"));
        cellTd.innerText = arr[obj][prop];
     }
   }
 };
 let section = document.querySelector(".some_array_of_objects");
 createTable(articles, section);
