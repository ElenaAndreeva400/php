let canvas = document.getElementsByTagName("canvas")[0];

canvas.width = 900;
canvas.height = 600;

let ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(0,0,900, 600);
ctx.font = "bold 30px Arial";
ctx.strokeStyle = "red";
ctx.textAlign = "center";

let tiger = {
    img: 'tiger.png',
    x: Math.floor((Math.random()*(canvas.width-100))),
    y: Math.floor((Math.random()*(canvas.height-100))),
    width: 128,
    height: 128
};
let rabbit1 = {
    img: 'rabbit.png',
    x: Math.floor((Math.random()*(canvas.width-100))),
    y: Math.floor((Math.random()*(canvas.height-100))),
    width: 128,
    height: 128
};
let rabbit2 = {
    img: 'rabbit.png',
    x: Math.floor((Math.random()*(canvas.width-100))),
    y: Math.floor((Math.random()*(canvas.height-100))),
    width: 128,
    height: 128
};

function drawImg(obj) {
    let img = new Image();
    img.src = 'img/' + obj.img;
    img.onload = () => {
        ctx.drawImage(
            img,
            obj.x, obj.y,
            obj.width, obj.height
        );
    }
}

function move(obj, event) {
    console.log(event.code);
    if (event.code==="KeyD") {
      console.log("перемещение вправо");
      clearImg(obj);
      eatImg(obj, rabbit1);
      eatImg(obj, rabbit2);
      obj.x += 20;
      drawImg(obj);
    } else if (event.code === "KeyA") {
        console.log("перемещение влево");
        clearImg(obj);
        eatImg(obj, rabbit1);
        eatImg(obj, rabbit2);
        obj.x -= 20;
        drawImg(obj);
    } else if (event.code === "KeyW") {
      console.log("перемещение вверх");
      clearImg(obj);
      eatImg(obj, rabbit1);
      eatImg(obj, rabbit2);
      obj.y -= 20;
      drawImg(obj);
    } else if (event.code === "KeyS") {
      console.log("перемещение вниз");
      clearImg(obj);
      eatImg(obj, rabbit1);
      eatImg(obj, rabbit2);
      obj.y += 20;
      drawImg(obj);
    }
}
function clearImg(obj) {
    ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
}

function eatImg(obj1, obj2) {
  if (obj1.x + 128 >= obj2.x && obj1.x <= obj2.x + 128 && obj1.y + 128 >= obj2.y && obj1.y <= obj2.y + 128) {
    ctx.fillRect(obj2.x, obj2.y, obj2.width, obj2.height);
     ctx.strokeText(`I will eat both rabbits`, canvas.width/2, canvas.height/2);
  }
}
drawImg(tiger);
drawImg(rabbit1);
drawImg(rabbit2);
document.addEventListener("keydown", move.bind(document, tiger));
document.addEventListener("keydown", eatImg.bind(tiger, rabbits));
