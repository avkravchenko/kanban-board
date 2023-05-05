import React, { useEffect, useState } from "react";
import TaskSelect from "./TaskSelect";
import Card from "./Card";
import uuid from "react-uuid";


const Column2 = ({title, getSelectedArray }) => {

    const [isClicked, setIsClicked] = useState(false)
    const [showCard, setShowCard] = useState(false)
    const [selectedValue, setSelectedValue] = useState([])
    const cardsLS = JSON.parse(localStorage.getItem("myObject"));


    useEffect(() => {
        const cardsJSON = localStorage.getItem("myObject");
        if (cardsJSON) {
            setSelectedValue(JSON.parse(cardsJSON));
        }
    }, []);

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowCard(true)
        
    }

const getSelectedValue = (value) => {
  const newSelectedValue = [...selectedValue, { id: uuid(), card: value, status: "Ready" }];
  setSelectedValue(newSelectedValue);
  getSelectedArray(newSelectedValue)//test 

  const cardsArray = JSON.parse(localStorage.getItem("myObject"));
  const updatedCardsArray = cardsArray.map((card) =>
    newSelectedValue.find((selected) => selected.card === card.card)
      ? { ...card, status: "Ready" }
      : { ...card, status: "Backlog" }
  );
  localStorage.setItem("myObject", JSON.stringify(updatedCardsArray));
};




    return (
        <form onSubmit={handleSubmit} className="main__content__column">{title}
            {selectedValue.map(value => value.status === "Ready" ? <Card key={value.id} card={value.card} /> : null)}

            { isClicked ? 
                <TaskSelect getSelectedValue={getSelectedValue} cardsLS={cardsLS} /> : 
                null 
            }

            <div><button onClick={handleClick} className="main__content__add-btn">+ Add card</button></div>

            
        </form>
    )
}

export default Column2