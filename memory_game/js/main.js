//var cardOne = "queen", cardTwo = "queen", cardThree = "king", cardFour = "king";

var cards = ["queen", "queen", "king", "king"];

//var cardOne = cards[0];
//var cardTwo = cards[2];

var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0]===cardsInPlay[1]){
			alert("You found a match!");
		} else {
			alert("sorry try again");
		}
};


function flipCard(cardId){
	//cardsInPlay.push(cardOne);
	//cardsInPlay.push(cardTwo);

	//console.log("user flipped " + cardsInPlay[0]);
	//console.log("user flipped " + cardsInPlay[1]);

	console.log("user flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);

	if (cardsInPlay.length === 2){
		checkForMatch();
	}
};

flipCard(0);
flipCard(2);
