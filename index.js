// const backgroundColor = [20, 190, 133];
const myCanvas = { width: 600, height: 600};
const backgroundColor = [20, 190, 133];
const lineColor = [0, 0, 0];
const activeLineColor = [255, 255, 255];
const lineWidth = 5;
const activelineWidth = 13;
const sounds = Array.from({ length: 6 });

const ball1 = {
    x: 300,
    y: 300,
    size: 50,
    speed: 1,
    fillColor: [80,80,230],
    strokeColor: [0,0,0],
    ballStrokeWeight: 2,
    rightSound: sounds[2],
    leftSound: sounds[2],
    soundLength: 1000,
} 

const ball2 = {
    x: 300,
    y: 400,
    size: 50,
    speed: 2,
    fillColor: [80,80,230],
    strokeColor: [0,0,0],
    ballStrokeWeight: 2,
    rightSound: sounds[2],
    leftSound: sounds[2],
    soundLength: 1000,
} 

const ball3 = {
    x: 300,
    y: 200,
    size: 50,
    speed: 3,
    fillColor: [80,80,230],
    strokeColor: [0,0,0],
    ballStrokeWeight: 2,
    rightSound: sounds[2],
    leftSound: sounds[2],
    soundLength: 1000,
} 

const ball4 = {
    x: 200,
    y: 300,
    size: 50,
    speed: 1,
    fillColor: [80,80,230],
    strokeColor: [0,0,0],
    ballStrokeWeight: 2,
    rightSound: sounds[2],
    leftSound: sounds[2],
    soundLength: 1000,
} 

const ball5 = {
    x: 400,
    y: 300,
    size: 50,
    speed: 2,
    fillColor: [80,80,230],
    strokeColor: [0,0,0],
    ballStrokeWeight: 2,
    rightSound: sounds[2],
    leftSound: sounds[2],
    soundLength: 1000,
} 

const ball6 = {
    x: 300,
    y: 300,
    size: 50,
    speed: 3,
    fillColor: [80,80,230],
    strokeColor: [0,0,0],
    ballStrokeWeight: 2,
    rightSound: sounds[2],
    leftSound: sounds[2],
    soundLength: 1000,
} 

const ball7 = {
    x: 300,
    y: 300,
    size: 50,
    speed: 1,
    fillColor: [80,80,230],
    strokeColor: [0,0,0],
    ballStrokeWeight: 2,
    rightSound: sounds[2],
    leftSound: sounds[2],
    soundLength: 1000,
} 

const ball8 = {
    x: 300,
    y: 400,
    size: 50,
    speed: 2,
    fillColor: [80,80,230],
    strokeColor: [0,0,0],
    ballStrokeWeight: 2,
    rightSound: sounds[2],
    leftSound: sounds[2],
    soundLength: 1000,
} 

const ball9 = {
    x: 300,
    y: 200,
    size: 50,
    speed: 3,
    fillColor: [80,80,230],
    strokeColor: [0,0,0],
    ballStrokeWeight: 2,
    rightSound: sounds[2],
    leftSound: sounds[2],
    soundLength: 1000,
} 

const ball10 = {
    x: 200,
    y: 300,
    size: 50,
    speed: 1,
    fillColor: [80,80,230],
    strokeColor: [0,0,0],
    ballStrokeWeight: 2,
    rightSound: sounds[2],
    leftSound: sounds[2],
    soundLength: 1000,
} 

const ball11 = {
    x: 400,
    y: 300,
    size: 50,
    speed: 2,
    fillColor: [80,80,230],
    strokeColor: [0,0,0],
    ballStrokeWeight: 2,
    rightSound: sounds[2],
    leftSound: sounds[2],
    soundLength: 1000,
} 

const ball12 = {
    x: 300,
    y: 300,
    size: 50,
    speed: 3,
    fillColor: [80,80,230],
    strokeColor: [0,0,0],
    ballStrokeWeight: 2,
    rightSound: sounds[2],
    leftSound: sounds[2],
    soundLength: 1000,
} 

const leftEdge = {
    x1: 110,
    y1: 0,
    x2: 110,
    y2: 600,
    color: lineColor,
    width: lineWidth,
}

const rightEdge = {
    x1: 470,
    y1: 0,
    x2: 470,
    y2: 600,
    color: lineColor,
    width: lineWidth,
}

const topEdge = {
    x1: 0,
    y1: 110,
    x2: 600,
    y2: 110,
    color: lineColor,
    width: lineWidth,
}

const bottomEdge = {
    x1: 0,
    y1: 470,
    x2: 600,
    y2: 470,
    color: lineColor,
    width: lineWidth,
}

const balls = [ball1, ball2, ball3, ball4, ball5, ball6];
const ballsx = [ball7, ball8, ball9, ball10, ball11, ball12];


function preload(){

    sounds.forEach((sound, i) => {
        sounds[i] = loadSound(`sounds/${i}.mp3`)
    })

    console.log(sounds);

    ball1.rightSound = sounds[2];
    ball1.leftSound = sounds[2];
    ball2.rightSound = sounds[2];
    ball2.leftSound = sounds[2];
    ball3.rightSound = sounds[2];
    ball3.leftSound = sounds[2];
    ball4.rightSound = sounds[2];
    ball4.leftSound = sounds[2];
    ball5.rightSound = sounds[2];
    ball5.leftSound = sounds[2];
    ball6.rightSound = sounds[2];
    ball6.leftSound = sounds[2];

    // for(let i = 0; i < sounds.length; i++){
    //     sounds[i] = loadSound(`sounds/${i}.mp3`)
    // }
}

function setup(){
    createCanvas(myCanvas.width, myCanvas.height);
    background(backgroundColor);
}



function draw(){
    
    background(backgroundColor);

    balls.forEach((ball) => {
        updateBall(ball);
        displayBall(ball);
    })
    drawLine(leftEdge);
    drawLine(rightEdge);
    drawLine(topEdge);
    drawLine(bottomEdge);
}


function updateBall(ball){
    console.log(ball.y);
    if(ball.y + ball.size/2 > bottomEdge.y1 ){
        ball.speed *= -1;
        ball.rightSound.play();
        activateLine(bottomEdge);
    } else if(ball.y - ball.size/2 < topEdge.y1 ){
        ball.speed *= -1;
        ball.leftSound.play();
        activateLine(topEdge);
    }
    ball.y+= ball.speed;
}

const displayBall = ({x, y, size, strokeColor, fillColor, ballStrokeWeight}) => {
        stroke(strokeColor);
        fill(fillColor);
        strokeWeight(ballStrokeWeight);
        ellipse(x, y, size);
}

function drawLine({x1, y1, x2, y2, color, width}){
    stroke(color);
    strokeWeight(width);
    line(x1, y1, x2, y2);
}



function activateLine(line){

    line.color = activeLineColor;
    line.width = activelineWidth;

    setTimeout(() => resetLines(line), 500);
}


function resetLines(line){
    line.color = lineColor;
    line.width = lineWidth;
}