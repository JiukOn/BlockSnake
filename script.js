let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let direction = "right";


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

function StartGame(){
    mkBG();
    mkSnake();

    let snakex = snake[0].x;
    let snakey = snake[0].y;

    if(direction == "right") snakex += box;
    if(direction == "left") snakex -= box;
    if(direction == "up") snakey -= box;
    if(direction == "down") snakey += box;

    snake.pop();

    let newHead = {
        x: snakex,
        y: snakey
    }

    snake.unshift(newHead);
}

let Game = setInterval(StartGame,100);