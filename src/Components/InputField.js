import React from 'react';

/* login */

function InputField(props){
  return (<input type="text" onChange={props.handleChange} value={props.searchTerm} />);
}

export default InputField;