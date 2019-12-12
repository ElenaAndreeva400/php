//таблица из 6-го задания
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
   table.addEventListener("click", sortByTh.bind(table, arr));
 };
 let section = document.querySelector(".some_array_of_objects");
 createTable(articles, section);
 sortByTh(articles, "click");
// занятие 7 задание 1
function sortByTh(arr, event) {
  let tbl = document.getElementsByClassName("some_array_of_objects").nthChild("table");
  let cell = event.target.innerHTML.toLowerCase();
  tbl.remove();
  console.log(cell, arr);
  let arrSort = arr.sort((a,b) =>{
    if (a[cell] > b[cell]) {
      return 1;
    } else if (a[cell] < b[cell]) {
      return -1;
    }
    return 0;
  });
  console.log(arrSort);
  generateTable(arrSort);
  return arrSort;
};
занятие 7 задание 2 - отдельный файл
// занятие 7 задание 3
function agreeForm(f) {
    // Если поставлен флажок, снимаем блокировку кнопки
    if (f.agree.checked) f.textarea.disabled = 0
    // В противном случае вновь блокируем кнопку
    else f.textarea.disabled = 1
  }
let form = document.forms.task;

// занятие 7 задание 4i
let loginInput = form.elements.login;
loginInput.value = "qwe";

loginInput.addEventListener("focus", focusOnLogin);
function focusOnLogin() {
    console.log("фокус на элементе loginInput");
  let span=form.getElementsByTagName("span");
  if (loginInput.value.length < 4 || loginInput.value.length > 10) {
    this.nextElementSibling.classList.remove("success");
    this.nextElementSibling.add("error");
  } else {
    this.nextElementSibling.classList.remove("error");
    this.nextElementSibling.classList.add("success");
  }
}
let passwordInput = form.elements.password;
passwordInput.addEventListener("focus", focusOnPassword);
function focusOnPassword() {
  let span = form.getElementsByTagName("span");
  if (passwordInput.value.length < 6) {
    this.nextElementSibling.classList.remove("success");
    this.nextElementSibling.add("error");
  } else {
    this.nextElementSibling.classList.remove("error");
    this.nextElementSibling.classList.add("success");
  }
 }

//занятие 7 задание 4iii
form.addEventListener("submit", takeForm);
function takeForm(event) {
event.preventDefault(); // отменяем отправление формы на сервер
let login=document.getElementById('login'), // let login = this.elements.login.value; можно было бы так, если бы атрибут name = "login", но у нас "color"
password=document.getElementById('password'); //let password = this.elements.pwd.value; можно было бы так, если бы атрибут name = "password", но у нас "color"
    console.log(`Введено значение логина: ${login.value} значение пароля ${password.value}`);
};

// занятие 7 задание 4iv
form.elements.reset.addEventListener("click", focusOnLogin);
form.elements.reset.addEventListener("click", focusOnPassword);
