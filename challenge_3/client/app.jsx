import React from 'react';
import Rows from './rows.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
  	super(props);
  	this.state ={
      rows: 6,
      columns: 7,
      color: "red",
      rowIDs: []
  	}
  }

  findRow (e) {
  	let changedSquare = false; // flag for if a square has been updated
    for(let i = this.state.rowIDs.length - 1; i >= 0; i--) {
	    let row = "row" + i; // create variable to match row IDs
      if(!changedSquare){
        if ($(`#${row} #tableRow #${e.target.id}`).css('background-color') === "rgba(0, 0, 0, 0)"){
        	//checking to see if square is currently white
		      if(this.state.color === "red") {
		        $(`#${row} #tableRow #${e.target.id}`).css("background-color", "rgb(255, 0, 0)");
		        // change square to red
            this.state.color = "blue";
            //change state to blue for next selection
		        changedSquare = true
		        //flag function to not run any other code
		      } else {
		      	//same idea but for player 2
		        $(`#${row} #tableRow #${e.target.id}`).css("background-color", "rgb(0, 0, 255)");
            this.state.color = "red"	        
		        changedSquare = true;
		      }
		    }
	    }
	  }
	  //invoke win condition checkers
	  this.checkRow();
	  this.checkColumn(e);
	  this.checkDiagonal(e);
  }

  checkRow () {
  	let checkColor;
  	let counter = 0;
  	//setting checkColor to previously placed color
  	if (this.state.color === "red") {
  		checkColor = "rgb(0, 0, 255)";
  	} else {
  		checkColor = "rgb(255, 0, 0)";
  	}
  	for(let j = 0; j < this.state.rows; j++){
  		let currentRow = this.state.rowIDs[j];
	    for (let i = 0; i < this.state.columns; i++) {
	    	// if square matches to what was just placed, increment
	      if ($(`#${currentRow} #tableRow #${i}`).css('background-color') === checkColor){
	      	counter += 1;
				    if(counter === 4) {
				    	alert('WINNER');
				    }
	      } else {
	      	//if sqaure does not match, reset counter to 0
	      	counter = 0;
	      }
	    }
	  }
  }

  checkColumn(e) {
  	//same setup as check row
  	let checkColor;
  	let counter = 0;
  	if (this.state.color === "red") {
  		checkColor = "rgb(0, 0, 255)";
  	} else {
  		checkColor = "rgb(255, 0, 0)";
  	}
    let currentColumn = e.target.id;
    //obtain column from id clicked
  	for(let i = 0; i < this.state.rows; i++) {
  		let currentRow = this.state.rowIDs[i];
      if ($(`#${currentRow} #tableRow #${currentColumn}`).css('background-color') === checkColor){
        counter += 1;
        if(counter === 4){
        	alert('WINNER');
        }
      } else {
      	counter = 0;
      }
  	}
  }

  checkDiagonal(e) {
    let column = e.target.id;
  }


  render () {
  	let numRows = [];
  	for(let i = 0; i < this.state.rows; i++) {
  		let rowsID = "row"+i;
  		this.state.rowIDs.push(rowsID);
  		numRows.push(<Rows columns={this.state.columns} id={rowsID} key={i}/>);
  	}
    return (
    	<div>
    	<table id="table" onClick={(e) => this.findRow(e)}>
          {numRows}
    	</table>
    	</div>
    )
  }
}

export default App;



// intended to change size of table
// did not end up using
  // increaseRow (e) {
  //   e.preventDefault();
  // 	this.setState ({
  // 		rows: this.state.rows +1
  // 	})
  // }
  // decreaseRow (e) {
  //   e.preventDefault();
  // 	this.setState ({
  // 		rows: this.state.rows -1
  // 	})
  // }
  // increaseColumn (e) {
  //   e.preventDefault();
  // 	this.setState ({
  // 		columns: this.state.columns +1
  // 	})
  // }
  // decreaseColumn (e) {
  //   e.preventDefault();
  // 	this.setState ({
  // 		columns: this.state.columns -1
  // 	})
  // }
    	// <form><button onClick={() => this.increaseRow()}> Row Increase</button></form>
    	// <form><button onClick={() => this.decreaseRow()}> Row Decrease</button></form>
    	// <form><button onClick={() => this.increaseColumn()}> Column Increase</button></form>
    	// <form><button onClick={() => this.decreaseColumn()}> Column Decrease</button></form>
