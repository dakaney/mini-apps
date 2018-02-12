let count = 0;
let winCountOne = 0;
let winCountTwo = 0;
let currentPlay = 'X'
let array = [first, second, third, fourth, fifth, sixth, seventh, eigth, ninth];
let board = [];
let previousWinner = '';

function changePlay() {
	if(count === 9) {
      turnText.textContent = "It's a draw!!!"
	} else if(count%2 === 0) {
		currentPlay = 'X';
    turnText.textContent = "Player 1's turn"
	} else if (count%2 === 1) {
		currentPlay = 'O';
    turnText.textContent = "Player 2's turn"
	}
}

function modifyText(event) {
    if (event.srcElement.textContent === 'X' || event.srcElement.textContent === 'O') {
      return;
    } else {
    event.srcElement.textContent = currentPlay;
    count++;
    changePlay();
    board = [[first.textContent, second.textContent, third.textContent],
             [fourth.textContent, fifth.textContent, sixth.textContent],
             [seventh.textContent, eigth.textContent, ninth.textContent],
             [first.textContent, fourth.textContent, seventh.textContent],
             [second.textContent, fifth.textContent, eigth.textContent],
             [third.textContent, sixth.textContent, ninth.textContent],
             [first.textContent, fifth.textContent, ninth.textContent],
             [third.textContent, fifth.textContent, seventh.textContent]];
    checkWinner();
    }
}

function checkWinner () {
	board.forEach(array => {
		var x = 0;
		var o = 0;
		array.forEach(square => {
			if(square === 'X') {
				x++;
			}
			if(square === 'O') {
				o++
			}
		})
		if(x === 3) {
			resetGame(null, 'X');
			turnText.textContent = "Player 1 wins!!!";
			previousWinner = "Previous winner: Player 1";
			winCountOne++;
			winCounterOne.textContent = winCountOne + " wins";
		}
		if(o === 3) {
			resetGame(null, 'O');
			turnText.textContent = "Player 2 wins!!!";
			previousWinner = "Previous winner: Player 2";
			winCountTwo++;
			winCounterTwo.textContent = winCountTwo + " wins";
		}
	})
}

function resetGame(event, change) {
    array.forEach(item => item.textContent = change);
    previous.textContent = previousWinner;
    if(previousWinner === "Previous winner: Player 2") {
    	count = 1;
    } else {
	  count = 0;
    }
	changePlay();
}
array.forEach(item => item.addEventListener("click", modifyText, false));

resetButton.addEventListener("click", resetGame, false);


