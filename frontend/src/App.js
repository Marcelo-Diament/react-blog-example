import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Banner from './components/Banner'
import Posts from './components/Posts'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Banner/>
        <Posts/>
      </Main>
      <Footer />
    </div>
  )
}

export default App;
