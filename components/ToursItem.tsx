// ToursItem.tsx
import React from 'react';

export type ToursItemProps = {
  tourName: string;
  tourImage: string;
  tourInfo: string;
  tourPrice: string;
  onEdit: () => void;
  onDelete?: () => void;
  deleteLoading?: boolean; // Add this line
};

const ToursItem = ({
  tourName,
  tourImage,
  tourInfo,
  tourPrice,
  onEdit,
  onDelete,
  deleteLoading = false,
}: ToursItemProps) => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-4">
      <img src={tourImage} alt={tourName} className="w-full h-auto rounded-md" />
      <h2 className="text-2xl font-bold">{tourName}</h2>
      <p>{tourInfo}</p>
      <p className="text-xl font-semibold">Price: {tourPrice}</p>
      <div className="flex space-x-4">
        <button
          onClick={onEdit}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Edit
        </button>
        {onDelete && (
            <button
              onClick={onDelete}
              disabled={deleteLoading}
              className={`bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-200 ${
                deleteLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {deleteLoading ? 'Deleting...' : 'Delete'}
            </button>
        )}
      </div>
    </div>
  );
};

export default ToursItem;
