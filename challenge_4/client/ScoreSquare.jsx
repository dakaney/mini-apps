import React from 'react';

const ScoreSquare = (props) => {
	let classname;
	let colSpan;
	let display = ''
	if(props.row === 0){
		classname = "scoresSquare";
    colSpan = "1";
		if(props.id % 3 !== 0){
		  classname = "scoresSquares"
		  display = props.scores;
		}
	} else {
		classname = "scores";
		colSpan = 3;
		display = props.results;
	}
	return (
      <td colSpan={colSpan} className={classname} id={props.id}>
      	{display}
      </td>
    )
}

export default ScoreSquare;