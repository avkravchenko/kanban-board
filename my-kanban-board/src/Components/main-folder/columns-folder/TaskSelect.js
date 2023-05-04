import React, { useState } from "react";
import uuid from "react-uuid";

const TaskSelect = ({cardsLS, getSelectedValue}) => {

    const [selected, setSelected] = useState('')

    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        setSelected(selectedValue)
        getSelectedValue(selectedValue)
    }

    return (
        <div className="card">
            <select onChange={handleSelectChange} value={selected}>
                <option key={uuid()} value={""}>{""}</option>

                {cardsLS.map(card => {
                    return (
                        <option key={uuid()} value={card.card}>{card.card}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default TaskSelect