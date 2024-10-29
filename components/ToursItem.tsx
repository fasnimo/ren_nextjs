'use client'
import React from 'react';

interface ToursItemProps{
    tourName: string;
    tourImage: string;
    tourInfo: string;
    tourPrice: string;
}

const ToursItem = ({tourName, tourImage, tourInfo, tourPrice}:ToursItemProps) => {
    return (
    <div>
        <h1>{tourName}</h1>
        <img src={tourImage} alt={tourName} />
        <p>{tourInfo}</p>
        <p>Price: {tourPrice}</p>
    </div>
    );
};

export default ToursItem;