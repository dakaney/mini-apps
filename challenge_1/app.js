let count = 0;
let currentPlay = 'X'
let array = [first, second, third, fourth, fifth, sixth, seventh, eigth, ninth];
let board = [];


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
             [seventh.textContent, eigth.textContent, ninth.textContent]];
    checkRow(2);
    checkColumn(2);
    checkDiagonal();
    }
}

function checkRow (row) {
  	if(row === -1) {
  		return;
  	}
  	var x = 0;
  	var o = 0;
    for (let i = 0; i < board.length; i++) {
      if (board[row][i] === 'X'){
      	x++;
      } else if (board[row][i] === 'O') {
      	o++;
      }
    }
    if (x === 3) {
      resetGame(null, 'X');
  	  turnText.textContent = "Player one wins!!!"
    }
    if (o === 3) {
      resetGame(null, 'O');
      turnText.textContent = "Player two wins!!!"
    }
    checkRow(row-1);
}

function checkColumn (column) {
	if(column === -1){
		return;
	}
	var x = 0;
	var o = 0;
	for (let i = 0; i < board[column].length; i++) {
      if (board[i][column] === 'X') {
      	x++;
      } else if (board[i][column] === 'O') {
    	o++;
      }
    }
    if (x === 3) {
    	resetGame(null, 'X');
    	turnText.textContent = "Player one wins!!!"
    }
    if (o === 3) {
    	resetGame(null, 'O');
    	turn.textContent = "Player two wins!!!"
    }
    checkColumn(column-1);
}

function checkDiagonal () {
	if (board[0][0] === 'X'){
		if(board[1][1] === 'X'){
			if(board[2][2] === 'X'){
				resetGame(null, 'X');
    	        turnText.textContent = "Player one wins!!!"
			}
		}
	}
	if (board[0][0] === 'O'){
		if(board[1][1] === 'O'){
			if(board[2][2] === 'O'){
				resetGame(null, 'O');
    	        turnText.textContent = "Player two wins!!!"
			}
		}
	}
	if (board[0][2] === 'X'){
		if(board[1][1] === 'X'){
			if(board[2][0] === 'X'){
				resetGame(null, 'X');
    	        turnText.textContent = "Player one wins!!!"
			}
		}
	}
	if (board[0][2] === 'O'){
		if(board[1][1] === 'O'){
			if(board[2][0] === 'O'){
				resetGame(null, 'O');
    	        turnText.textContent = "Player two wins!!!"
			}
		}
	}
}


function resetGame(event, change) {
    array.forEach(item => item.textContent = change);
	count = 0;
	changePlay();
}
array.forEach(item => item.addEventListener("click", modifyText, false));

resetButton.addEventListener("click", resetGame, false);


