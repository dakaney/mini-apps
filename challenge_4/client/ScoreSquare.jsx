import React from 'react';

const ScoreSquare = (props) => {
	let classname;
	let colSpan;
	if(props.row === 0){
		classname = "scoresSquare";
    colSpan = "1";
		if(props.id % 3 !== 0){
		  classname = "scoresSquares"
		}
	} else {
		classname = "scores";
		colSpan = 3;
	}
	return (
      <td colSpan={colSpan} className={classname} id={props.id}>
      	{props.scores}
      </td>
    )
}

export default ScoreSquare;