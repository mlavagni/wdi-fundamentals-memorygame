
var scoreWins = 0;
var scoreLosses=0;

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},

	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},

	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},

	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}

	];


var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0]===cardsInPlay[1]){
			scoreWins += 1;
			alert("You found a match!");
		} else {
			scoreLosses += 1;
			alert("sorry try again");
		}
		showScore();
};


function flipCard(cardId){
	var card = this.getAttribute("class");

	this.setAttribute("src", cards[card].cardImage);

	cardsInPlay.push(cards[card].rank);

	if (cardsInPlay.length === 2){
		checkForMatch();
	}
};
document.getElementById("reset").addEventListener("click", resetGame);
document.getElementById("newGame").addEventListener("click", newGame);

function resetGame(){
	scoreLosses = 0;
	scoreWins = 0;
	removeCards();
	cardsInPlay = [];
	createBoard();
	showScore();
}

function newGame(){
	removeCards();
	cardsInPlay = [];
	createBoard();
}

function removeCards(){
	var carsToRemove =document.querySelectorAll("img");
	for (var i = 0; i < carsToRemove.length; i++){
		carsToRemove[i].remove();
	}
}

function createBoard(){
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement("img");

		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("class", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
		
	}
}

function showScore(){
	document.getElementsByClassName("wins")[0].innerHTML = "Wins = " + scoreWins;
	document.getElementsByClassName("losses")[0].innerHTML = "Losses = " + scoreLosses;
}


createBoard();

