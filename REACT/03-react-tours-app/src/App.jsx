import React, { useState, useEffect } from 'react';
import UpdateToursButton from './components/Update';
import Tours from './components/Tours';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [tours, setTours] = useState([]);

  // Fetch tours
  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);

      console.log(tours);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  // Update tours
  const updateTours = async () => {
    try {
      const response = await fetch(url);
      const updateTours = await response.json();
      setTours(updateTours);
    } catch (error) {
      console.log(error);
    }
  };

  // Remove tours
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  return (
    <main className="max-w-3xl max-w-fixed-width mx-auto mt-20 sm:px-4 md:px-8">
      <UpdateToursButton  updateTours={updateTours} />
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;
