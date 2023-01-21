import React from 'react';
import './Card.css';

const Card = (properties) => {
    const {name, email, id} = properties;
    return (
        <div className='tc dib element pa2 ma3'>
            <img src={`https://robohash.org/${id}`} alt="robot" />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;