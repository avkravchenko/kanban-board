import React, { useEffect, useState } from "react";
import TaskSelect from "./TaskSelect";
import Card from "./Card";
import uuid from "react-uuid";
import './select.scss'


const Column2 = ({ title, getSelectedArray, giveSelectedArray, amountInWork }) => {

    const [isClicked, setIsClicked] = useState(false)
    const [arrLs, setArrLs] = useState([])
    const [cardsArray, setCardsArray] = useState([])


    useEffect(() => {
        const cardsJSON = localStorage.getItem("myObject");
        if (cardsJSON) {
            setArrLs(JSON.parse(cardsJSON));
        }
    }, [giveSelectedArray, amountInWork]);

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    const handleSubmit = (e) => {
        e.preventDefault()        
    }

const getSelectedValue = (value) => {
  const newSelectedValue = [{ id: uuid(), card: value, status: "Ready", description: '' }];
  getSelectedArray(newSelectedValue)
  setCardsArray((cardsArray) => [...cardsArray, newSelectedValue])

  const cardsArray = JSON.parse(localStorage.getItem("myObject"));

  const updatedCardsArray = cardsArray.map((card) =>
    newSelectedValue.find((selected) => selected.card === card.card)
      ? { ...card, status: "Ready" }
      : { ...card }
  );
  localStorage.setItem("myObject", JSON.stringify(updatedCardsArray));
  setIsClicked(false)
};

    return (
        <form onSubmit={handleSubmit} className="main__content__column">{title}
            {arrLs.map(value => value.status === "Ready" ? <Card id={value.id} key={value.id} card={value.card} /> : null)}

            { isClicked ? 
                <TaskSelect cardsArray={cardsArray} title={'Backlog'} getSelectedValue={getSelectedValue} /> : 
                null 
            }

            <div>
                <button
                    onClick={handleClick}
                    className="main__content__add-btn"
                    disabled={!arrLs.some((value) => value.status === "Backlog")}
                >
                    + Add card
                </button>
            </div>
        </form>
    )
}

export default Column2