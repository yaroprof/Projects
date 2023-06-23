import React, { useState, useEffect } from 'react'
import Tours from './Tours';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [tours, setTours] = useState([])



  return (
    <main>
      <Tours />
    </main>
  )
}

export default App
