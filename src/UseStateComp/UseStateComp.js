import React, { useState } from 'react';
import './css.css';

export const UseStateComp = () => {
    const [car, setCar] = useState('Mersedes');
    const [count, setCount] = useState(2);
    // console.log(car);
    function text() {
        setCar('BMW')
    }
    function txt() {
        setCount(count + 1)
    }
    // function txt() {
    //     setCount('Audi')
    // }

    //изменение свойства елементов по нажатию на кнопку

    const [square, setSquare] = useState(true)
    function change() {
        setSquare(!square)

    }
    const sqrUse = (square)? 'sqr' : 'sqrFalse';
    // console.log(sqrUse);
  return (
    <div>
        <h2>{car}</h2>
        <button onClick={text}>BMW</button>
        <button onClick={() => setCar('Audi')}>Audi</button>
        <button onClick={() => setCar('Wolksvagen')}>Wolksvagen</button>

        <h3>{count}</h3>
        <button onClick={txt}>txt</button>
        <hr></hr>

        <div className={sqrUse}></div>
        <button onClick={change}>change me</button>
    </div>
  )
}
