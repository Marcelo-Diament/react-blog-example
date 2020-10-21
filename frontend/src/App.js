import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Banner from './components/Banner'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Banner/>
      </Main>
      <Footer />
    </div>
  )
}

export default App;
