import React, { useState } from "react";
import './column.scss';

import Card from "./Card";
import './addCardBtn.scss'

const Column = ({title, id}) => {
    const [isCliked, setIsClicked] = useState(false);
    const [childValue, setChildValue] = useState('');
    const [isSubmit, setIsSubmit] = useState(false);
    console.log(isCliked)
    console.log("is submit", isSubmit)
    

    const handleClick = () => {
        setIsClicked(!isCliked);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmit(true);

    }

    let addCardBtn = <button className="main__content__btn" onClick={handleClick}>+ Add card</button>;
    let submitCardBtn = <button type="submit" onClick={handleSubmit}>Submit</button>;

    const onInputChange = (inputValue) => {
        console.log(inputValue)
        setChildValue(inputValue);
    }


    return (
        <>
            <div key={id} className="main__content__column">{title}
                { isCliked ? <Card isSubmit={isSubmit} onTextChange={onInputChange} /> : null }
                {isSubmit ? <Card /> : null}
                <div>{ childValue ? submitCardBtn : addCardBtn }</div>
            </div>
        </>
        
    )
}

export default Column