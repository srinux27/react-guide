import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.clickHandler}>Person Name: <strong> {props.name} </strong></p>
            <input type="text" value={props.name} onChange={props.nameChangeHandler}></input>
        </div>
    );
}

export default person;