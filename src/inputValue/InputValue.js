import React, { useState } from 'react'

function InputValue() {

    //получение данных без нажатия на кнопку
    const [res, setRes] = useState('')
    const [txt, setTxt] = useState('')
    function changeInput(event) {
        const incl = event.target.value;
        setRes(incl);
        const inclClass = !incl.includes('@')? 'not email' : 'email';
        setTxt(inclClass); 
        
    }
  return (
    <div>
        <h2>{res}</h2>
        <h3>{txt}</h3>
        <input type="text" onChange={changeInput}/>
    </div>
  )
}

export default InputValue;