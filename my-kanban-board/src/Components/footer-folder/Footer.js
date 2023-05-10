import React, { useEffect, useState } from "react";
import './footer.scss';


const Footer = ({amountInWork, amountFinished}) => {
    const [finished, setFinished] = useState([]);
    const [currentCards, setCurrentCards] = useState([]);

    useEffect(() => {
        const cardsLS = JSON.parse(localStorage.getItem('myObject'));
        const finishedCards = cardsLS.filter(card => card.status === "finished");
        setFinished(finishedCards);
        const currentCards = cardsLS.filter(card => card.status !== "finished");
        setCurrentCards(currentCards)
    },[amountInWork, amountFinished])

    return (
        <div className="footer">
            <div className="quantity">
                <span>Active tasks: {currentCards.length}</span>
                <span>Finished tasks: {finished.length}</span>
            </div>
            <div className="name_year">Kanban board by Alexander K. 2023</div>
        </div>     
    )
}

export default Footer