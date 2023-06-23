import React, { useState, useEffect } from 'react'
import Tours from './Tours';
import { getPlacesData } from './api';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [places, setPlaces] = useState([])
  // const [tours, setTours] = useState([])

  useEffect(() => {
    getPlacesData()
      .then((data) => {
        console.log(data);
        
        setPlaces(data)
    })
  }, [])


  return (
    <main>
      <Tours />
    </main>
  )
}

export default App
