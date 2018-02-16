import React from 'react';
import NumberPad from './NumberPad';
import ScoreSheet from './ScoreSheet';

class App extends React.Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
      previousScore: 0,
      click: 0,
      totalScore:0,
      allScores: [], //creates an array to hold tuples
      currentScores:[], //creates tuple of current set's scores
      scores: [], //this is for updating display of scores
      results: [] // creates an array to be displayed as total scores
		}
	}

	handleClick (e) {
		let score = Number(e.target.id);
    if (this.state.previousScore + score > 10) { // this portion is for the first bowl of the set
      alert("can't bowl over 10");
    } else if(this.state.click % 2 === 0){
    	if (score === 10) { // if a strike is made on first bowl
        this.setState({
        	click: this.state.click + 2
        })
        this.state.currentScores.push(10, 0);
        this.state.previousScore = 0;
        this.state.scores.push('x', '-');
	      this.state.allScores.push(this.state.currentScores);
	      this.state.currentScores = [];
    	} else { //if anything but a strike is made on first bowl
	    	this.state.currentScores.push(score);
	      this.setState({
	      	click: this.state.click + 1
	      })
	    	this.state.previousScore = score;
	    	this.state.scores.push(score);
    		
    	}

    } else { // this portion is for the second bowl of the set
    	if( this.state.previousScore + score === 10){ // if total of two bowls in 1 set = 10
    		this.setState({
    			click: this.state.click + 1
    		})
    		this.state.currentScores.push(score);
    		this.state.previousScore = 0;
  	    this.state.allScores.push(this.state.currentScores);
    		this.state.currentScores = [];
    	  this.state.scores.push('/');
    	} else { // if regular 2 bowls less than 10
	    	this.state.currentScores.push(score);
	      this.setState({
	      	click: this.state.click + 1
	      })
	    	this.state.previousScore = 0;
	      this.state.allScores.push(this.state.currentScores);
	      this.state.currentScores = [];
	    	this.state.scores.push(score);
    	}
    }
    this.calculateScore(this.state.allScores);
	}

	calculateScore(scoresArray) {
		this.state.results = []; // reset scores so it does not duplicate
		this.state.totalScore = 0;
    for (let i = 0; i < scoresArray.length && i < 10; i++) {
    	if(scoresArray[i][0] === 10){ // if first bowl was a strike
        if(scoresArray[i+1]){
        	if(scoresArray[i+1][0] && scoresArray[i+1][1] === 0){
        		if(i === 0){
	        		if(scoresArray[i+1][0] === 10){
	        			let results = 30;
	        			this.state.results.push(30);
	        			this.state.totalScore += 30;
	        		}
	            let results = 10 + scoresArray[i+1][0] + scoresArray[i+1][1];
	            this.state.results.push(results);
	            this.state.totalScore += results;
        		} else {
        		  let results = 10 + scoresArray[i+1][0] + scoresArray[i+1][1] + this.state.results[i-1];
	            this.state.results.push(results);
	            this.state.totalScore += results;
        		}
        	}
        }
      } 
    }
    console.log(this.state.results);
  }

	//if first bowl is a strike



	render() {
		let NumberPadDisplay = [];
		for (let i = 0; i < 4; i++) {
      NumberPadDisplay.push(<NumberPad id={i} key={i}click={this.handleClick}/>);
		}
		return (
		<div>
			<table>
			  <tbody>
				  {NumberPadDisplay}
		    </tbody>
			</table>
			<div> bowling scores: </div>
			<table className="scoreTable">
				<ScoreSheet scores={this.state.scores} results={this.state.results}/>
			</table>
		</div>
		)
	}
}



export default App;
