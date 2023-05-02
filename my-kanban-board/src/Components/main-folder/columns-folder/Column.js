import React from "react";
import './column.scss';

import Card from "./Card";
import './addCardBtn.scss'

const Column = ({title, id}) => {

    const handleClick = () => {
        console.log('heh')
    }

    return (
        <>
            <div key={id} className="main__content__column">{title}
                <Card />
                <button className="main__content__btn" onClick={handleClick}>+ Add card</button>
            </div>
            
        </>
        
    )
}

export default Column