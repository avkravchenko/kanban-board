import React, { useEffect, useState } from "react";
import './column.scss';
import './addCardBtn.scss';
import './submitCardBtn.scss';
import './inputText.scss';
import TaskInput from "./TaskInput";
import Card from "./Card";
import uuid from "react-uuid";


const Column1 = ({id, title, giveSelectedArray }) => {
    const [showInput, setShowInput] = useState(false)
    const [showSubmitBtn, setShowSubmitBtn] = useState(false)
    const [cardsArray, setCardsArray] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [cardLS, setCardsLs] =useState([])

    useEffect(() => {
        const cardsJSON = JSON.parse(localStorage.getItem("myObject"));
        setCardsLs(cardsJSON)
        if (cardsJSON) {
            setCardsArray((cardsJSON));
        }
    }, [giveSelectedArray, inputValue]);

    console.log(inputValue)

    const handleClick = () => {
        setShowInput(!showInput)
        
    }
    
    const handleInput = (input) => {
        input ? setShowSubmitBtn(true) : setShowSubmitBtn(false);
        setInputValue(input.trim())
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() !== '') { 
          setCardsArray(cardsArray => [...cardsArray, {id: uuid(), card: inputValue, status: "Backlog", description: ''}]);
        }

        const newCard = {
            id: uuid(),
            card: inputValue,
            status: "Backlog",
            description: ''
        }

        const newCardsArray = [...cardsArray, newCard];
        localStorage.setItem("myObject", JSON.stringify(newCardsArray));

        setInputValue(''); 
        setShowSubmitBtn(false); 
        setShowInput(false)
      }

      

    return (
        <form id={id} className="main__content__column" onSubmit={handleSubmit}>{title}
            {cardLS.map(task => task.status === "Backlog" ? <Card id={task.id} key={task.id} card={task.card} /> : null)}


            { showInput ? 
                <TaskInput showSubmitBtn={showSubmitBtn} title={title} value={inputValue} handleInput={handleInput} /> : 
                null 
            }

            { showSubmitBtn ? 
                <div><button type="submit" className="main__content__sbmt-btn">Submit</button></div> :
                <div><button key={uuid()} onClick={handleClick} className="main__content__add-btn">+ Add card</button></div>
            }     
        </form>
    )    
}

export default Column1;
