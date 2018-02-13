let count = 0;
let winCountOne = 0;
let winCountTwo = 0;
let currentPlay = 'X';
let playerOne = "Player 1";
let playerTwo = "Player 2";
let array = [first, second, third, fourth, fifth, sixth, seventh, eigth, ninth];
let board = [];
let previousWinner = '';

function changePlay() {
	// this function should keep track of whos turn it is and display to the client
	if(count === 9) {
      turnText.textContent = "It's a draw!!!"
	} else if(count%2 === 0) {
		currentPlay = 'X';
    turnText.textContent = playerOne + "'s turn"
	} else if (count%2 === 1) {
		currentPlay = 'O';
    turnText.textContent = playerTwo + "'s turn"
	}
}

function modifyText(event) {
	//find what id was clicked on
	// if id clicked on has a piece, do nothing
    if (event.srcElement.textContent === 'X' || event.srcElement.textContent === 'O') {
      return;
    } else {
    	// if id clicked on is empty, add a piece onto board
    event.srcElement.textContent = currentPlay;
    count++;
    //update count to keep track of player
    changePlay();
    // update board to current state of game
    board = [[first.textContent, second.textContent, third.textContent],
             [fourth.textContent, fifth.textContent, sixth.textContent],
             [seventh.textContent, eigth.textContent, ninth.textContent],
             [first.textContent, fourth.textContent, seventh.textContent],
             [second.textContent, fifth.textContent, eigth.textContent],
             [third.textContent, sixth.textContent, ninth.textContent],
             [first.textContent, fifth.textContent, ninth.textContent],
             [third.textContent, fifth.textContent, seventh.textContent]];
    checkWinner();
    //check winner with board
    }
}

function checkWinner () {
	//for loop through each array on board
	board.forEach(array => {
		var x = 0;
		var o = 0;
		// loop through array for each position
		array.forEach(square => {
			if(square === 'X') {
				x++;
			}
			if(square === 'O') {
				o++
			}
		})
		// if there are 3 of the same pieces, declare winner
		if(x === 3) {
			resetGame(null, 'X');
			turnText.textContent = playerOne + " wins!!!";
			previousWinner = "Previous winner: " + playerOne;
			winCountOne++;
			winCounterOne.textContent = winCountOne + " wins";
		}
		if(o === 3) {
			resetGame(null, 'O');
			turnText.textContent = playerTwo + " wins!!!";
			previousWinner = "Previous winner: " + playerTwo;
			winCountTwo++;
			winCounterTwo.textContent = winCountTwo + " wins";
		}
	})
}

function updateName(event) {
  event.preventDefault();
  //update name variables with values from input box
  playerOne = userOne.value;
  playerTwo = userTwo.value;
  //remove inout boxes and display what names were selected
  names.parentNode.removeChild(names);
  //update display information on screen
  firstPlayer.textContent = "Player One: " + playerOne;
  secondPlayer.textContent = "Player Two: " + playerTwo;
  changePlay();
  scoreOne.textContent = playerOne;
  scoreTwo.textContent = playerTwo;
  if(previousWinner === "Previous winner: Player 1") {
  	previousWinner = "Previous winner: " + playerOne;
  }
  if(previous.textContent === "Previous winner: Player 1") {
  	previousWinner = "Previous winner: " + playerOne;
    previous.textContent = "Previous winner: " + playerOne;
  } else if (previous.textContent === "Previous winner: Player 2") {
  	previousWinner = "Previous winner: Player 2";
  	previous.textContent = "Previous winner: " + playerTwo;
  }
}

function resetGame(event, change) {
    array.forEach(item => item.textContent = change);
    previous.textContent = previousWinner;
    if(previousWinner === "Previous winner: " + playerTwo ) {
    	count = 1;
    } else {
	  count = 0;
    }
	changePlay();
}

array.forEach(item => item.addEventListener("click", modifyText));
resetButton.addEventListener("click", resetGame);
newName.addEventListener("click", updateName);
