
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
			alert("You found a match!");
		} else {
			alert("sorry try again");
		}
};


function flipCard(cardId){
	var card = this.getAttribute("class");

	this.setAttribute("src", cards[card].cardImage);

	cardsInPlay.push(cards[card].rank);

	if (cardsInPlay.length === 2){
		checkForMatch();
	}
};

function createBoard(){
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement("img");

		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("class", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}


createBoard();

