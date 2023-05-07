import React, { useEffect, useState } from "react";
import TaskSelect from "./TaskSelect";
import Card from "./Card";
import uuid from "react-uuid";


const Column2 = ({ title, getSelectedArray, giveSelectedArray }) => {

    const [isClicked, setIsClicked] = useState(false)
    const [arrLs, setArrLs] = useState([])


    useEffect(() => {
        const cardsJSON = localStorage.getItem("myObject");
        if (cardsJSON) {
            setArrLs(JSON.parse(cardsJSON));
        }
    }, [giveSelectedArray]);

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    const handleSubmit = (e) => {
        e.preventDefault()        
    }

const getSelectedValue = (value) => {
    //делаем новый массив с выбранным опшеном, присваевам значения 
  const newSelectedValue = [{ id: uuid(), card: value, status: "Ready" }];
  getSelectedArray(newSelectedValue)

  //получаем массив из лс с карточками из первой колонки 
  const cardsArray = JSON.parse(localStorage.getItem("myObject"));

  //создаем новый массив с изменением статуса, чтоб передать его в лс
  //проходим по каждому значению со статусом бэклог, для каждого бэклога вызываем поиск по новому массиву newSelectedValue
  //если карточка из лс совпадает со значением нового массива, меняем статус и добавляем в обновленный массив updatedCardsArray
  const updatedCardsArray = cardsArray.map((card) =>
    newSelectedValue.find((selected) => selected.card === card.card)
      ? { ...card, status: "Ready" }
      : { ...card }
  );
  localStorage.setItem("myObject", JSON.stringify(updatedCardsArray));
};

    return (
        <form onSubmit={handleSubmit} className="main__content__column">{title}
            {arrLs.map(value => value.status === "Ready" ? <Card key={value.id} card={value.card} /> : null)}

            { isClicked ? 
                <TaskSelect title={'Backlog'} getSelectedValue={getSelectedValue} /> : 
                null 
            }

            <div><button onClick={handleClick} className="main__content__add-btn">+ Add card</button></div>
        </form>
    )
}

export default Column2