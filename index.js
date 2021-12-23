var cvs=document.getElementById("projetjava"); 
var ctx=cvs.getContext("2d");
var snakeW=15;
var snakeH=15;
var direction="right";
var s=0;
 // fonction ecritsnake
function ecritsnake(x,y){
    ctx.fillStyle="yellow";
    ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH);
    ctx.fillStyle="black";
    ctx.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH);
}
     var len=5;
     jeux=[];
     for (i=len-1;i>=0;i--){
    	jeux.push({x:i,y:1})
        }
    //initialitation des controle de direction 
 document.addEventListener("keydown",Controle);
 function Controle(e){
 	if(e.keyCode==37 && direction!="right"){
 		direction="left";
 	}
 	else if(e.keyCode==38 && direction!="down"){
 		direction="up";   
 	}
 	else if(e.keyCode==39 && direction!="left"){
 		direction="right";
 	}
 	else if(e.keyCode==40 && direction!="up"){
 		direction="down";
 	}

 }
 // utilisation du fonction random
 var food={
 	x:Math.round(Math.random()*(cvs.width/snakeW)+1),
  	y:Math.round(Math.random()*(cvs.height/snakeH)+1)
    }
  //creation du fonction FOOD
 function Food(x,y){
    ctx.fillStyle="black";
    ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH);
    ctx.fillStyle="black";
    ctx.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH);
   }
//fonction draw()
 function draw(x,y){
 	ctx.clearRect(0,0,cvs.width,cvs.height);
    for(i=0;i<jeux.length;i++){
    	var snakeX = jeux[i].x;
    	var snakeY = jeux[i].y;
    	ecritsnake(snakeX,snakeY);
    }

Food(food.x,food.y);
//creation de la tete de snake
 var snakeX = jeux[0].x;
 var snakeY = jeux[0].y;

    if (direction=="right"){snakeX++}
    else if (direction=="left"){snakeX--}
    else if (direction=="up"){snakeY--}
    else if (direction=="down"){snakeY++}
   	if(snakeX==food.x && snakeY==food.y){
       food={
 	       x:Math.round(Math.random()*(cvs.width/snakeW)+1),
  	       y:Math.round(Math.random()*(cvs.height/snakeH)+1)
  	       }
  	       s++;
var newhead ={
  	       x: snakeX,
  	       y: snakeY
           }
        }

   	else {
   jeux.pop();
   var newhead ={
  	       x: snakeX,
  	       y: snakeY
           }
         }
    if(snakeY>5)
      	{
  		 for (i=0;i<jeux.length;i++){
    	jeux[i].X=0;
    	jeux[i].Y=0;
        }
  	}
  
  
  jeux.unshift(newhead);
 //affichage du valeur du variable score //
 ctx.fillStyle = "black";
 ctx.fillText("SCORE: " + s, 35 , projetjava.height-440);
}   //fin de fonction draw
setInterval(draw,90);
