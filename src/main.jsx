import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import '../App.css'
// import Home from './pages/home/Home.jsx'
import Converter from './pages/converter/converter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Converter />
  </React.StrictMode>,
)
