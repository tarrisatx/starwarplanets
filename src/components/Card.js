import React from 'react';
import './Card.css';

const Card = ({ name, rotation_period, orbital_period, population}) => {
    
    return (
        
        <div className='tc dib br3 pa3 ma2 grow bw2 shadow-5'>
            <div className='card-bg'>
                <h2>{name}</h2>
                <p>Rotation Period: {rotation_period}</p>
                <p>Orbital Period: {orbital_period}</p>
                <p>Population: {population}</p>
            </div>
        </div>
    );
}

export default Card;