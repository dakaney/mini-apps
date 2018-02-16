import React from 'react';
import Keys from './Keys';

const NumberPad = (props) => {
	let array = [];
	let idArray = [];
	if(props.id === 0){
		idArray = [1,2,3];
	} else if (props.id === 1) {
    idArray = [4,5,6];
	} else if (props.id === 2) {
		idArray = [7,8,9];
	} else if (props.id === 3) {
		idArray = [0, 10, 0]
	}
	for (var i = 0; i < 3; i++){
    array.push(<Keys id={idArray[i]} key={i} click={props.click}/>)
	}
	return (
      <tr id={props.id}>
      {array}
      </tr>
    )
}

export default NumberPad;
