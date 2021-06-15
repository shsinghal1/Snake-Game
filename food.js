import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'  


let food = getRandomFoodPosition()
// console.log(food)

const EXPANSION_RATE = 5


export function update() {
    if(onSnake(food)){
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition();
        // console.log(food);
    }
    
  }

  export function draw(gameBoard) {
     
          const foodElement = document.createElement('div')
          foodElement.style.gridRowStart = food.y;
          foodElement.style.gridColumnStart = food.x;
          foodElement.classList.add('food')
          gameBoard.appendChild(foodElement);
      }
      

      function getRandomFoodPosition(){
          let newFoodPosition;

          while(newFoodPosition == null || onSnake(newFoodPosition)) {
             return newFoodPosition = randomGridPosition()
            //   console.log(newFoodPosition)
          }
      }
  