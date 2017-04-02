

function playAgain()
{
	window.location.reload();
	
}

function disableButtons()
{
	document.getElementById("1").disabled = true;
	document.getElementById("2").disabled = true;
	document.getElementById("3").disabled = true;
}

function rand(min, max)
{
	var randomNum =Math.random();
	var coef = (max - min);
	var num = randomNum * coef;
	var result = num + min;
	var resultStr = Math.floor(result).toString();
	return resultStr;	
}

var playerPoints = 0;
var machinePoints =0;

function makeSelectionClick(clicked_id)
{
	
	var currentPlayerImage = document.getElementById('imageID');
	switch (clicked_id) 
	{
	  case "1":
		
		currentPlayerImage.src = "images/rock.png";
		break;
	  case "2":
		currentPlayerImage.src = "images/paper.png";
		break;
	
	  case "3":
		currentPlayerImage.src = "images/scissors.png";
		break;
	}
	
	var currentPcItemImage = document.getElementById('itemID');
	var randomNumber = rand(1,4);
	switch (randomNumber) 
	{
	  case "1":
		currentPcItemImage.src = "images/rock.png";
		break;
	  case "2":
		currentPcItemImage.src = "images/paper.png";
		break;
	
	  case "3":
		currentPcItemImage.src = "images/scissors.png";
		break;
	}
	
	if((currentPcItemImage.src)===(currentPlayerImage.src))
	{
		//nobody wins
		document.getElementById('playerPoints').innerHTML = playerPoints.toString();
		document.getElementById('machinePoints').innerHTML = machinePoints.toString();
	}
    if((currentPlayerImage.src).includes('rock'))
	{	
		if((currentPcItemImage.src).includes('scissors'))
		{
			//player wins
			playerPoints += 10;
		}
		if((currentPcItemImage.src).includes('paper'))
		{	
			//machine wins
			machinePoints +=10;
		}		
	}	
	if((currentPlayerImage.src).includes('paper'))
	{
		if((currentPcItemImage.src).includes('scissors'))
		{
			//machine wins
			machinePoints +=10;
		}
		if((currentPcItemImage.src).includes('rock'))
		{	
			//player wins
			playerPoints +=10;
		}	
		
	}

	if((currentPlayerImage.src).includes('scissors'))
	{
		if((currentPcItemImage.src).includes('paper'))
		{
			//player wins
			playerPoints +=10;
		}
		if((currentPcItemImage.src).includes('rock'))
		{	
			//machine wins
			machinePoints +=10;
		}			
	}
	
	if(playerPoints>=100 && (playerPoints > machinePoints))
	{
		alert("YOU WON!!");
		document.getElementById('message').innerHTML = "PLAYER Wins!!" ;
		disableButtons();
	}
	if(machinePoints>=100 && (playerPoints < machinePoints))
	{
		alert("The computer WON!!");
		document.getElementById('message').innerHTML = "MACHINE Wins!!" ;
		disableButtons();
	}
	
	document.getElementById('playerPoints').innerHTML = playerPoints.toString();
	document.getElementById('machinePoints').innerHTML = machinePoints.toString();

	
}

