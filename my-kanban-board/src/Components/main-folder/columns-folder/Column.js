import React, { useState } from "react";
import './column.scss';
import './addCardBtn.scss';
import './submitCardBtn.scss';
import TaskInput from "./TaskInput";
import Card from "./Card";
import uuid from "react-uuid";


const Column = ({id, title}) => {
    const [showInput, setShowInput] = useState(false)
    const [showSubmitBtn, setShowSubmitBtn] = useState(false)
    const [cardsArray, setCardsArray] = useState([])
    const [inputValue, setInputValue] = useState('')



    const handleClick = () => {
        setShowInput(!showInput)
    }

    const handleInput = (input) => {
        input ? setShowSubmitBtn(true) : setShowSubmitBtn(false);
        if (input !== ''){
            setInputValue(input)
        }
        
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() !== '') { 
          setCardsArray(cardsArray => [...cardsArray, {id: uuid(), card: inputValue}]);
        }
        setInputValue(''); 
        setShowSubmitBtn(false); 
      }

    return (
        <form id={id} className="main__content__column" onSubmit={handleSubmit}>{title}
            {cardsArray.map(task => {
                return <Card key={task.id} card={task.card} />
            })}
            {showInput ? <TaskInput value={inputValue} handleInput={handleInput} /> : null}
            {showSubmitBtn ? 
                <div><button type="submit" className="main__content__sbmt-btn">Submit</button></div> :
                <div><button onClick={handleClick} className="main__content__add-btn">+ Add card</button></div>
            }     
        </form>
    )    
}

export default Column;
