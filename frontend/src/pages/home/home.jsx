import React, { useState } from 'react'
import './home.css'
import Header from '../../components/header/header.jsx'
import ExploreMenu from '../../components/exploreMenu/exploreMenu.jsx'
import Fooddisplay from '../../components/fooddisplay/fooddisplay.jsx'
import Appdownload from '../../components/appdownload/appdownload.jsx'

const Home = () => {
  const [category,setCategory]=useState('All');
  return (
    <div >
      <Header></Header>
      <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
      <Fooddisplay category={category}></Fooddisplay>
      <Appdownload></Appdownload>
    </div>
  )
}

export default Home
