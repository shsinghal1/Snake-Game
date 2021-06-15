import { update as updateSnake , draw as drawSnake ,SNAKE_SPEED , getSnakeHead, snakeIntersection} from './snake.js'        

import { update as updateFood , draw as drawFood} from './food.js'
import {outsideGrid } from './grid.js'
let lastRendreTime = 0; 
let gameOver = false;
const gameBoard = document.getElementById('game-board');

 
 function main(currentTime){
     if(gameOver){
        if(confirm('you lost. Press OK to restart')){
            window.location='/Snake-game/'
        }
        return
     }

     window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRendreTime) / 1000;
     

     if(secondsSinceLastRender < 1 / SNAKE_SPEED) return;
     lastRendreTime = currentTime;
     update();
     draw();
 }


 window.requestAnimationFrame(main)


 function update(){
    updateSnake();
    updateFood();
    checkDeath()
 }

 function draw() {
     gameBoard.innerHTML ="";
    drawSnake(gameBoard);
    drawFood(gameBoard);
 }


 function checkDeath(){
     gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
 }