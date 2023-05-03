import React from "react";
import './card.scss'
import uuid from "react-uuid";

const Card = ({card}) => {
    return (
        <div className="card">{card}</div>
    )
}

export default Card;