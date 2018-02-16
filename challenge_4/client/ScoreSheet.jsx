import React from 'react';
import ScoreSquare from './ScoreSquare';

const ScoreSheet = (props) => {
	let scores = props.scores.slice(0);
	let firstRowArray =[];
	let secondRowArray = [];
	for (let i = 0; i < 30; i++){
		if(i % 3 !== 0){
			if(scores[0] !== undefined){
        firstRowArray.push(<ScoreSquare key={i} row={0} id={i} scores={scores[0]} />)
        scores.splice(0, 1);
			} else {
				firstRowArray.push(<ScoreSquare key={i} row={0} id={i}/>)
			}
		} else {
      firstRowArray.push(<ScoreSquare key={i} row={0} id={i} />)
		}
	}
	for(let j = 0; j < 10; j++) {
		secondRowArray.push(<ScoreSquare key={j} row={1} id={j}/>)
	}
	return (
		<tbody>
      <tr id='1'>
      	{firstRowArray}
      </tr>
      <tr id='2'>
      	{secondRowArray}
      </tr>
      </tbody>
    )
}

export default ScoreSheet;