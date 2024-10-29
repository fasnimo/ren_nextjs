'use client'
import React from 'react';

interface ToursItemProps{
    tourName: string;
    tourImage: string;
    tourInfo: string;
    tourPrice: string;
    onEdit: () => void;  // Handler for edit action
    onDelete: () => void;  // Handler for delete action
}

const ToursItem = ({tourName, tourImage, tourInfo, tourPrice, onEdit, onDelete }:ToursItemProps) => {
    return (
    <div>
        <h1>{tourName}</h1>
        <img src={tourImage} alt={tourName} />
        <p>{tourInfo}</p>
        <p>Price: {tourPrice}</p>
        {/* Buttons for edit and delete */}
        <div style={{ marginTop: '10px' }}>
                <button onClick={onEdit} style={{ marginRight: '10px' }}>Edit</button>
                <button onClick={onDelete} style={{ color: 'red' }}>Delete</button>
        </div>
    </div>
    );
};

export default ToursItem;