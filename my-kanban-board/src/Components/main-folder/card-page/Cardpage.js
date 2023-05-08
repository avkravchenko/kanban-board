import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './cardpage.scss'


const CardPage = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [isClicked, setIsClicked] = useState(false)
    const [text, setText] = useState('')
    const [isFocusLost, setIsFocusLost] = useState(false)

    useEffect(() => {
        const getDataFromLS = JSON.parse(localStorage.getItem('myObject'))
        setData(getDataFromLS)
    }, [id, isFocusLost])

    const handleClick = () => {
        setIsClicked(!isClicked)
    }
    
    const handleChange = (e) => {
        setText(e.target.value)
    }

    const HandleBlur = () => {
        setIsFocusLost(true)
        setIsClicked(false)
        const newData = data.map(oldData => {
            if (oldData.id === id) {
                return {...oldData, description: text}
            } else {
                return oldData
            }
        })
        localStorage.setItem('myObject', JSON.stringify(newData))
    }
   


    return (
        <div className='card-page'>
            <h1>{data.map(cardLS => (cardLS.id === id) ? cardLS.card : null)}</h1>
            {isClicked ?  
                <textarea onBlur={HandleBlur} onChange={handleChange} className='text'></textarea> :
                <p onClick={handleClick}>Description: {data.map(cardLS => (cardLS.id === id) ? (cardLS.description === "" ? 'This task has no description' : cardLS.description) : null)} </p> }
        </div>
    );
};

export default CardPage;
