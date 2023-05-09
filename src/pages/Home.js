import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div className='home-wrapper'>
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default Home