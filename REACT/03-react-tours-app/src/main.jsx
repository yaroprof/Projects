import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../dist/output.css';
import './media.css';
import './base.css';

// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
