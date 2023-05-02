import React from "react";
import './addCardBtn.scss'

const AddCard = () => {

    const handleClick = () => {
        console.log('heh')
    }

    return (
        <button className="main__content__btn" onClick={handleClick}>+ Add card</button>
    )
}

export default AddCard;