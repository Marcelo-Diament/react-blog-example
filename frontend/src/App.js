import React, { useState, useEffect } from 'react'
import Routes from './routes'
import Header from './components/Header'
import Footer from './components/Footer'
import { detectDevice } from './Helpers'

import './App.css'

const App = () => {
  const [currentDevice, setCurrentDevice] = useState(detectDevice())

  useEffect(() => {
    const updateDeviceDimensions = () => {
      setCurrentDevice(detectDevice())
    }
    window.addEventListener('resize', updateDeviceDimensions)
    updateDeviceDimensions()
    return () => {
      window.removeEventListener('resize', updateDeviceDimensions)
    }
  }, [currentDevice])

  return (
    <div className="App">
      <Header currentDevice={currentDevice}/>
      <Routes />
      <Footer />
    </div>
  )
}

export default App;
