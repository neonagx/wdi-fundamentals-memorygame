var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";

if (cardOne === cardThree){
	alert("You Got a Match!");
} else if(cardTwo === cardFour){
	alert("You Got a Match!");
} else { 
	alert("Sorry Try Again");
};

var board = document.getElementById('game-board');
function createBoard(){
	for (var i=0; i<cards.length; i++){
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		board.appendChild(cardElement);
	}
}