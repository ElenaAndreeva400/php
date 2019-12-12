function showResults(event) {
  let possibilities = [present, noPresent];
  present.innerText = "Вы выиграли";
  noPresent.innerText = "Не в этот раз";
  if (event.target.classList.contains("containerBox")) {
    event.target.innerText = possibilities[Math.floor(Math.random() * possibilities.length)];
      if (present) {
        event.target.classList.add('present');
        this.removeEventListener("click", showResults);
      } else if (noPresent) {
       event.target.classList.add('noPresent');
        this.removeEventListener("click", showResults);
      }
   }
}
let presentsContainer = document.getElementById("present_container");

function generateContainerBoxes(n) {
  for (let box = 0; box < n * n; box++) {
    let containerBox = document.createElement("div");
    containerBox.id = 'containerBox';
    presentsContainer.append(containerBox);
    for (let i=0; i<box.length; i++) {
      let present = document.createElement("div");
      present.className = 'containerBox';
      containerBox.append(present);
    }
    for (let i=0; i<box.length; i++) {
      let noPresent = document.createElement("div");
      noPresent.className = 'containerBox';
      containerBox.append(noPresent);
    }
  }
  return containerBox;
  }

presentsContainer = generateContainerBoxes(3);
presentsContainer.addEventListener("click", showResults);
