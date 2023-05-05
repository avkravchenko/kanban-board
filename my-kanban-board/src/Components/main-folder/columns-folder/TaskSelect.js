import React, { useEffect, useState } from "react";
import uuid from "react-uuid";

const TaskSelect = ({cardsLS, getSelectedValue}) => {

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
            <select onChange={handleSelectChange} value={selected}>
                <option key={uuid()} value={""}>{""}</option>

                {actualDataLs.map(card => card.status === "Backlog" ? <option key={uuid()} value={card.card}>{card.card}</option> : null)}

                
            </select>
        </div>
    )
}

export default TaskSelect