import React from 'react';
import Data from '../data/data.json';
import Card from './Card';

function Cards(){
    return(
        Data.map((employee) => {
            return(
            <Card name={employee.name} pos={employee.pos} about={employee.about} lang={employee.lang} />
            )
        })
    )
};

export default Cards;