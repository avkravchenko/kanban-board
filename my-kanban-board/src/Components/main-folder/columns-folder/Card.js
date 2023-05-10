import React from "react";
import './card.scss';
import { Link } from 'react-router-dom';

const Card = ({card, id}) => {

    return (
        <Link to={`/card/${id}`}>
            <div className="card">{card}</div>
        </Link> 
    )
}

export default Card;
