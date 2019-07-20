function fly() 
{
	yPosition -= 20;
}

function draw() 
{
	dr.drawImage(background, 0, 0);
	for(var i = 0; i < barrier.length; i++) 
	{
		dr.drawImage(up, barrier[i].x, barrier[i].y);
		dr.drawImage(bottom, barrier[i].x, barrier[i].y + up.height + 85);
		barrier[i].x--;
		if(barrier[i].x == 125) 
		{
			barrier.push(
			{
				x : game.width,
				y : Math.floor(Math.random() * up.height) - up.height
			});
		}
		if(xPosition + heart.width >= barrier[i].x && xPosition <= barrier[i].x + up.width
		&& (yPosition <= barrier[i].y + up.height || yPosition + heart.height >=
		barrier[i].y + up.height + 85) || yPosition + heart.height >= game.height - land.height) 
		{
			location.reload();
		}
		if(barrier[i].x == 5) 
		{
			score++;
		}
	}
	dr.drawImage(land, 0, game.height - land.height);
	dr.drawImage(heart, xPosition, yPosition);
	yPosition += 1.5;
	dr.font = "30px Arial";
	dr.fillText(score, 10, game.height - 20);
	requestAnimationFrame(draw);
}

var heart = new Image();
var background = new Image();
var land = new Image();
var up = new Image();
var bottom = new Image();
heart.src = "1.png";
background.src = "2.png";
land.src = "3.png";
up.src = "4.png";
bottom.src = "5.png";

var game = document.getElementById("game");
var dr = game.getContext("2d");
document.addEventListener("keydown", fly);

var barrier = [];
barrier[0] = 
{
	x : game.width,
	y : 0
}

var score = 0;
var xPosition = 10;
var yPosition = 150;
bottom.onload = draw;