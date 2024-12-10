'use client'
import React from 'react';

interface ToursItemProps {
  tourName: string;
  tourImage: string;
  tourInfo: string;
  tourPrice: string;
  onEdit: () => void;
  onDelete: () => void;
}

const ToursItem = ({
  tourName,
  tourImage,
  tourInfo,
  tourPrice,
  onEdit,
  onDelete,
}: ToursItemProps) => {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px 0', borderRadius: '8px' }}>
      <h1>{tourName}</h1>
      <img src={tourImage} alt={tourName} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
      <p>{tourInfo}</p>
      <p><strong>Price:</strong> {tourPrice}</p>

      <div style={{ marginTop: '10px' }}>
        <button onClick={onEdit} style={{ padding: '10px 15px', marginRight: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Edit</button>
        <button onClick={onDelete} style={{ padding: '10px 15px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
      </div>
    </div>
  );
};

export default ToursItem;
