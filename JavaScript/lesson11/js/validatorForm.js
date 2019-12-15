class Validator {
  _rules =  null;
  _messages = null;
  _successHandler =null;
  _errorHandler = null;
  _errorCounter = [];

// валидатор должен принимать форму, это происходит в конструкторе
constructor(form){
  this._form =form;
  // повесим на форму обработчик события валидации
  // bind - привязывает контекст
  this._form.addEventListener("submit", this.validate.bind(this)); // второй this ссылка на экземпляр класса, первый this ссылка на form
  }
  get form() {
    return this._form;
  }
  set form(form){
    this._form = form;
 }
  get rules() {
    return this._rules;
  }
  set rules(value){
    this._rules = value;
  }
  get messages() {
    return this._messages;
  }
  set messages(value){
    this._messages =value;
  }
  get successHandler() {
    return this._successHandler;
  }
  set successHandler(func){
    this._successHandler = func;
  }
  get errorHandler(){
    return this._errorHandler;
  }
  set errorHandler(func){
    this._errorHandler=func;
  }
  get errorCounter() {
    return this._errorCounter;
  }
  set errorCounter(value){
    this._errorCounter = value;
  }

  init(settings){
    rules = settings.rules;
    messages = settings.messages;
    successHandler = settings.successHandler;
    errorHandler = settings.errorHandler;
    errorCounter = settings.errorCounter;
  }

 // название методов полностью соответствует названию ключей в let rules
  minLength(elemValue, ruleValue) { // elemValue это строка, которую пользователь ввел, ruleValue - правило
    return elemValue.length >= ruleValue; // false or true
  }
  maxLength(elemValue, ruleValue) {
    return elemValue.length <= ruleValue;
  }
  required(elemValue) {
    return elemValue.length > 0;
  }
  reg_match(elemValue, ruleValue){
    return ruleValue.test(elemValue);
    console.log(this); // тут this validate
  }

  validate(event){ // событие event = отправка данных, когда пользователь нажимает на кнопку submit, данные должны уйти на сервер
    // мы должны отменить отправку данных на сервер
    event.preventDefault();
    let elements = form.elements; // все inputы формы
    for (let elem of elements) {
    // dataset связывается с data-validate в inputs
        if (elem.dataset.validate) { // работаем только с теми inputами у которых установлены data-validate
          // следующие rulesValues - объекты с правилами
          let rulesValues = rules[elem.dataset.validate]; // получаем значения для login, password, name, comment из let rules
           //console.log(rulesValues);
           for (let rule in rulesValues) { // получаем название ключа в правиле
            //console.log(rule);
            // minlength
            // maxlength
            // если значения ключей, установленные для данной формы не совпадают с теми данными, которые ввел пользователь в поле одного из input:
            if(!this[rule](elem.value, rulesValues[rule])){ // elem.value - то, что пользователь ввел, rulesValues[rule] - наши условия
              // создаем переменную, с доступом ко всем сообщениям об ошибках ввода данных в каждом input поле: логин, пароль, имя, комментарий
              let errorMessages=messages[elem.dataset.validate];
              // перебираем сообщения об ошибочно введенных в разных полях данных
              for (let message in errorMessages) {
                // сообщение об ошибке соотносится с определенным ключом определенного правила
                if (message===rule) {
                  // отправляем/накапливаем все полученные сообщения об ошибках в массив ошибок errorCounter
                  errorCounter.push(`В поле ${elem.dataset.validate} ` `${messages[elem.dataset.validate][message]}`);
                }
              }
            }
          }
         }
      }
       if (errorCounter.length===0) {// если длина массива  0, то форма отправляется на сервер
            successHandler(form); // выводится сообщение "Данные предоставлены корректно, форма отправляется на сервер"
          } else {
          errorHandler(form);//если длина массива более 0, то форма не отправляется, выводится сообщение "данные предоставлены некорректно, введите данные повторно, как требуется"
          }
  }


let form = document.forms.validate; // получение формы по имени

let validator = new Validator(form);
// далее вызывается метод init - прописан в конце

//   УСЛОВИЯ ПРОПИСЫВАЕМ в виде объекта для каждого input свод правил
// название ключей это коллекции это название аттрибутов в hml у inputов
let rules = {
  login: {
    minLength: 4, // потом напишем обработчик соответствия этим условиям
    maxLength: 18
  },
  password: {
    minLength: 8
  },
  name: {
    required: true
  },
  comment: {
    reg_match: /comment/
  }
};

let messages = {
  login: {
    minLength: "Минимум 4 символа"
  },
  name: {
    required: "Поле обязательно для заполнения"
  },
  password: {
    minLength: "Минимум 8 символов"
  }
};

let successHandler = (form) => { // эта функция должна сработать, если все поля формы будут заполнены верно
  console.log("Данные предоставлены корректно, форма отправляется на сервер");
};

let errorHandler = (form) => { // эта функция должна сработать, если поля формы будут заполнены некорректно
  console.log("данные предоставлены некорректно, введите данные повторно, как требуется");
};

// метод принимает на вход объект
validator.init({ // settings из init строка 49
  rules: rules,// по ключу rules будут лежать все правила rules
  messages: messages,
  successHandler: successHandler,
  errorHandler: errorHandler,
  errorCounter: errorCounter
});
