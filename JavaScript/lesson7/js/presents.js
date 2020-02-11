function guessYourPrize(n) {

  let attempts = 3;

  let divContainer = document.createElement('div');
  divContainer.classList = 'container';

  let messageContainer = document.createElement('div');
  divContainer.append(messageContainer);
  messageContainer.innerText = `Всего попыток: ${attempts}`;
  messageContainer.classList = 'messageContainer';

  let table = document.createElement('div');
  divContainer.append(table);

  let arr = [];
  for (let i = 0; i < 3; i++) {
      arr[i] = Math.floor(Math.random()*(n*n));
  }

  for (let i = 0; i < n*n; i++) {
      let mes = document.createElement('p');
      mes.innerText = `Узнай что внутри`;
      table.append(mes);
      mes.addEventListener('click', insideBox);


      function insideBox() {
          if (attempts > 0) {
              if (arr.includes(i)) {
                  mes.classList = 'prize';
                  mes.innerText = 'Здесь лежит приз';
             
              } else {
                  mes.classList = 'noPrize';
                  mes.innerText = 'Тут пусто';
             
              }
              messageContainer.innerText = `Осталось попыток: ${--attempts}`;
          } else {
            messageContainer.innerText = 'Попытки исчерпаны. Игра закончена.';
            return;
          }

      }
  }

  document.body.append(divContainer);

}
guessYourPrize(4);
