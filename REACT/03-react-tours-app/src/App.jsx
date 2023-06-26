import React, { useState, useEffect } from 'react'
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';


const App = () => {
  const [tours, setTours] = useState([])


  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setTours(tours)
      
      console.log(tours);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])


  return (
    <main className='max-w-3xl max-w-fixed-width mx-auto mt-20 sm:px-4 md:px-8'>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
