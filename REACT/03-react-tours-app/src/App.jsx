import React, { useState, useEffect } from 'react'
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';


const App = () => {
  const [tours, setTours] = useState([])

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
    <main>
      <Tours tours={tours} />
    </main>
  )
}

export default App