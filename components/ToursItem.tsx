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
    <div className="p-5 border border-gray-300 rounded-lg shadow-sm mb-4">
      <h1 className="text-xl font-bold mb-3">{tourName}</h1>
      <img 
        src={tourImage} 
        alt={tourName} 
        className="w-full h-auto rounded-lg mb-3"
      />
      <p className="text-gray-700 mb-3">{tourInfo}</p>
      <p className="font-semibold text-gray-900">
        <strong>Price:</strong> {tourPrice}
      </p>

      <div className="mt-4 flex space-x-3">
        <button 
          onClick={onEdit} 
          className="px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600"
        >
          Edit
        </button>
        <button 
          onClick={onDelete} 
          className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToursItem;
