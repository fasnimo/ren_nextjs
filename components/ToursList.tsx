// 'use client '

type Tour = {
    id: string;
    name: string;
    info: string;
    image: string;
    price: string;
};

interface ToursListProps{
    toursData: Tour[];
    onClickHandler: (tourId: string) => void;
}

async function ToursList({toursData, onClickHandler}:ToursListProps) {
 
    return (
      <section>
          {toursData.map((tour) => {
              return <h2 onClick={() => onClickHandler(tour.id)} key={tour.id}>{tour.name}</h2>
          })}
      </section>
    )
  }
  
  export default ToursList