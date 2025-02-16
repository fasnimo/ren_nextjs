'use client'
import React from 'react';

type Tour = {
  id: string;
  name: string;
};

interface ToursListProps {
  toursData: Tour[];
  onClickHandler: (tourId: string) => void;
}

const ToursList = ({ toursData, onClickHandler }: ToursListProps) => {
  return (
    <section className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-lg space-y-4">
      {toursData.length === 0 ? (
        <div className="text-center text-lg text-gray-500">No tours available.</div>
      ) : (
        toursData.map((tour) => (
          <h2
            key={tour.id}
            onClick={() => onClickHandler(tour.id)}
            className="cursor-pointer text-xl font-semibold text-blue-700 hover:text-blue-900 hover:underline transition-colors duration-200"
          >
            {tour.name}
          </h2>
        ))
      )}
    </section>
  );
};

export default ToursList;
