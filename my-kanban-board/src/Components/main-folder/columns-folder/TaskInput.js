import React, { useState } from "react";
import './card.scss'

const TaskInput = ({handleInput, value}) => {
    const [cardText, setCardText] = useState('');

    const handleChange = (event) => {
        const text = event.target.value;
        setCardText(text);
        handleInput(text);
      }

    return (
        <div className="card input">
            <input onChange={handleChange} value={value} type="text" />
        </div>
    )
}

export default TaskInput;