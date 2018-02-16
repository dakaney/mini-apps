import React from 'react';

const Keys = (props) => {
  return (
    <td className="keys" id={props.id} onClick={(e) => props.click(e)}>
    {props.id}
    </td>
  )
}

export default Keys;
