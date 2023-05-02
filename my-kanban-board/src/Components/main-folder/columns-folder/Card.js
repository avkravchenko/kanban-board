import React, { useState } from "react";
import './card.scss'

const Card = (props) => {

    const isSubmit = props.isSubmit;

    const [inputValue, setInputValue] = useState('')

    const handleChange = (event) => {
        const newInputValue = event.target.value
        setInputValue(newInputValue)
        props.onTextChange(newInputValue)
    }

    const input = <input onChange={handleChange} type="text" value={inputValue}/>;
    const taskFromInput = <div>{inputValue}</div>

    return (
        <div className="card">
            {isSubmit ? taskFromInput : input}
        </div>
    )
}

export default Card