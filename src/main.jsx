import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import BookContextProvider from './context/bookContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <BookContextProvider>
       <App />
       </BookContextProvider>
    </Router>
  </React.StrictMode>
)
