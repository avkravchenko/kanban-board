import React, { useState } from "react";
import TaskSelect from "./TaskSelect";
import Card from "./Card";
import uuid from "react-uuid";


const Column2 = ({title }) => {

    const [isClicked, setIsClicked] = useState(false)
    const [showCard, setShowCard] = useState(false)
    const [selectedValue, setSelectedValue] = useState([])
    const cardsLS = JSON.parse(localStorage.getItem("myObject"));

    console.log(selectedValue)

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowCard(true)
    }

    const getSelectedValue = (value) => {
        setSelectedValue(selectedValue => [...selectedValue, {id: uuid(), card: value, status: "Ready"}])
        console.log(selectedValue)
        const cardsJSON = localStorage.getItem("myObject");
        const cardsArray = JSON.parse(cardsJSON); // Parse JSON string into an array of objects
        cardsArray.forEach(elem => (elem.card === value) ? elem.status = "Ready" : elem.status = "Backlog"); // Use forEach() method to modify each object in the array
        console.log("this is text", cardsArray);
        localStorage.setItem("myObject", JSON.stringify(cardsArray)); // Save the array back to the local storage
    }



    return (
        <form onSubmit={handleSubmit} className="main__content__column">{title}
            {selectedValue.map(value => {
                return (
                    <Card key={uuid()} card={value.card}/>
                )
            })}

            { isClicked ? 
                <TaskSelect getSelectedValue={getSelectedValue}  cardsLS={cardsLS} /> : 
                null 
            }

            <div><button onClick={handleClick} className="main__content__add-btn">+ Add card</button></div>

            
        </form>
    )
}

export default Column2