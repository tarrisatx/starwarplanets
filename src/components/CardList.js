import React from 'react';
import Card from './Card';

const CardList = ({ data }) => {
    return (
        <div>
           {
                data.map((user, i) => {
                    return (
                        <Card 
                            key={i} 
                            name={data[i].name} 
                            rotation_period={data[i].rotation_period}
                            orbital_period={data[i].orbital_period}
                            population={data[i].population}

                        />
                        )
                    })
                }
        </div>
    );
}

export default CardList;