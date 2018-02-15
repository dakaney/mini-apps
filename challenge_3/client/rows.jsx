import React from 'react';
import Square from './square.jsx'

const Rows = (props) =>{
	let numCols = [];
  	for(let i = 0; i < props.columns; i++) {
  		let colsID = i;
  		numCols.push(<Square key={i} id={colsID}/>);
  	}
	
      return (
      	<tbody id={props.id}>
      	<tr id="tableRow">
          {numCols}
        </tr>
        </tbody>
      )
	
}

export default Rows;