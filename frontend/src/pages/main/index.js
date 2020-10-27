import React from 'react'
import Main from '../../components/Main'
import Banner from '../../components/Banner'
import Posts from '../../components/Posts'

const MainPage = () => {
  return (
    <div className="main-container">
      <Main>
        <Banner />
        <Posts />
      </Main>
    </div>
  )
}

export default MainPage