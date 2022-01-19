let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}


function mkBG(){
    context.fillStyle = 'rgb(134, 54, 255)';
    context.fillRect(0,0,16*box,16*box);
}

function mkSnake(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = 'rgb(128, 76, 237)';
        context.strokeStyle = 'rgb(34, 24, 56)';
        context.fillRect(snake[i].x, snake[i].y, box, box);
        context.strokeRect(snake[i].x, snake[i].y, box, box);
    }
}

function mkFood(){
    context.fillStyle = 'rgb(250,10,10)'
    context.strokeStyle = 'rgb(50, 120, 120)';
    context.fillRect(food.x,food.y,box,box);
    context.strokeRect(food.x,food.y,box,box);
}

function update(event){
//left
    if(event.keyCode == 65 && direction != "right") direction = "left";
     else if (event.keyCode == 37 && direction != "right") direction = "left";
//up
    if(event.keyCode == 87 && direction != "down") direction = "up";
     else if (event.keyCode == 38 && direction != "down") direction = "up";
//rigth
    if(event.keyCode == 68 && direction != "left") direction = "right";
     else if (event.keyCode == 39 && direction != "left") direction = "right";
//down
    if(event.keyCode == 83 && direction != "up") direction = "down";
     else if (event.keyCode == 40 && direction != "up") direction = "down";
}
document.addEventListener('keydown', update);

function StartGame(){

    if(snake[0].x >= 16 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x <= 0 * box && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y >= 16 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y <= 0 * box && direction == "up") snake[0].y = 16 * box;

    mkBG();
    mkSnake();
    mkFood();

    let snakex = snake[0].x;
    let snakey = snake[0].y;

    if(direction == "right") snakex += box;
    if(direction == "left") snakex -= box;
    if(direction == "up") snakey -= box;
    if(direction == "down") snakey += box;

    if(snakex != food.x || snakey != food.y){
        snake.pop();
    
    }else{
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

  

    let snakeHead = {
        x: snakex,
        y: snakey
    }

    snake.unshift(snakeHead);
}

let Game = setInterval(StartGame,100);