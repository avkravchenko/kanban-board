import React, { useEffect, useState } from "react";
import uuid from "react-uuid";

const TaskSelect = ({ getSelectedValue, title }) => {

    const [actualDataLs, setActualDataLs] = useState([])
    const [selected, setSelected] = useState('')



    useEffect(() => {
        const arrayLs = JSON.parse(localStorage.getItem('myObject'))
        setActualDataLs(arrayLs)
    }, [selected])

    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        setSelected(selectedValue)
        getSelectedValue(selectedValue)
    }


    return (
        <div className="card">
            <select  onChange={handleSelectChange} value={selected}>
                <option key={uuid()} disabled defaultValue value={""}>{"Move your task"}</option>

                {actualDataLs.map(card => card.status === title ? <option key={uuid()} value={card.card}>{card.card}</option> : null)}

                
            </select>
        </div>
    )
}

export default TaskSelect