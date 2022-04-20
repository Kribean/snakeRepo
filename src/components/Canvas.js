import './Canvas.css'
import Pad from './Pad'
import {useRef,useEffect} from 'react'

function Canvas({score,updateScore}) {
  
   

    const canvasRef = useRef(null)
    const headX = useRef(10);
    const headY = useRef(5);
    const appleX = useRef(5);
    const appleY = useRef(5);
    let snakeParts = useRef([]);
    let tailLength = useRef(2);
    let leScore = useRef(0);
    let xVelocity = useRef(0);
    let yVelocity = useRef(0);
    let gameOver = useRef(false);
 
    class SnakePart{
        constructor(x,y){
            this.x=x;
            this.y=y;
        }
    }
    
    useEffect(() => {
      
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')

      let speed =7;
      let tileCount = 20;
      let tileSize = canvas.width/tileCount;
      let velocityCst = 1;





      //game loop
      function drawGame(){
          clearScreen();
          changeSnakePosition();
          let result = isGameOver();
          if (result) {
            return;
          }
          checkAppleCollision()
          drawApple();
          drawSnake();
          setTimeout(drawGame, 1000/speed)
      }

      function isGameOver() {
        
      
        if (yVelocity.current === 0 && xVelocity.current === 0) {
          return false;
        }
      
        //walls
        if (headX.current < 0) {
            console.log(headX.current);
          gameOver.current = true;
        } else if (headX.current === tileCount.current) {
          gameOver.current = true;
        } else if (headY.current < 0) {
          gameOver.current = true;
        } else if (headY.current === tileCount.current) {
          gameOver.current = true;
        }
      
        for (let i = 0; i < snakeParts.current.length; i++) {
          let part = snakeParts.current[i];
          if (part.x === headX.current && part.y === headY.current) {
            gameOver.current = true;
            break;
          }
        }
      
        if (gameOver.current) {
          ctx.fillStyle = "white";
          ctx.font = "50px";
      
      
          ctx.fillText("Game Over!", canvas.width / 6.5, canvas.height / 2);
        }
      
        return gameOver.current;
      };

      function clearScreen(){
          ctx.fillStyle = 'black';
          ctx.fillRect(0,0,canvas.width,canvas.height)

      };

      function drawApple(){
        ctx.fillStyle = 'blue';
        ctx.fillRect(appleX.current*tileCount,appleY.current*tileCount,tileSize,tileSize)           
      }

      function drawSnake(){
    

        snakeParts.current.forEach((partSnk)=>{
            ctx.fillStyle = 'green';
            ctx.fillRect(partSnk.x*tileCount,partSnk.y*tileCount,tileSize,tileSize)
        });
        snakeParts.current.push(new SnakePart(headX.current, headY.current))
        ctx.fillStyle = 'orange';
        ctx.fillRect(headX.current*tileCount,headY.current*tileCount,tileSize,tileSize);
        while (snakeParts.current.length > tailLength.current) {
          snakeParts.current.shift(); // remove the furthet item from the snake parts if have more than our tail size.
        }
      }

      function changeSnakePosition(){
          headX.current += xVelocity.current;
          headY.current += yVelocity.current

      }

      function checkAppleCollision(){
          if(appleX.current===headX.current && appleY.current===headY.current)
          {
              appleX.current = Math.floor(Math.random()*tileCount);
              appleY.current= Math.floor(Math.random()*tileCount);
              tailLength.current++;
              leScore.current++;
              updateScore(leScore.current)
          }
      }
      
      document.body.addEventListener('keydown',keyDown);

      function keyDown(event){
        event.preventDefault();

        //up
        if(event.keyCode === 38){
            if(yVelocity.current===1)
            {
                return
            }
            else{
                xVelocity.current = 0;
                yVelocity.current = -velocityCst
            }

        }

                //down
                if(event.keyCode === 40){
                    if(yVelocity.current===-velocityCst)
                    {
                        return
                    }
                    else{
                        xVelocity.current = 0;
                        yVelocity.current = velocityCst
                    }
                }
                        //left
        if(event.keyCode === 37){
            if(xVelocity.current===velocityCst)
            {
                return
            }
            else{
                xVelocity.current = -velocityCst;
                yVelocity.current = 0
            }
        }

                //down
                if(event.keyCode === 39){
                    if(xVelocity.current===-velocityCst)
                    {
                        return
                    }
                    else{
                        xVelocity.current = velocityCst;
                        yVelocity.current = 0
                    }
                }



      }
      //Our draw come here
      drawGame();
      
    })
    
    return (
        <div className='row justify-content-center m-2'>
            
          <div className='col-sm-8'>
          <canvas ref={canvasRef} width={400} height={400}/>
              </div>  
              
            
        
        
        <div className='row'>
            <Pad />
        </div>
    </div>


    )
  }

export default Canvas