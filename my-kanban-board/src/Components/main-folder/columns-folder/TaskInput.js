import React, { useState } from "react";
import './card.scss'

const TaskInput = ({handleInput, value }) => {

    const [tasks, setTasks] = useState([])

    const handleChange = (event) => {
        const text = event.target.value;
        handleInput(text);
        setTasks([...tasks, value]);
      }

    return (
        <div className="card input">
            <input onChange={handleChange} value={value} type="text" />
        </div>
    )
}

export default TaskInput;