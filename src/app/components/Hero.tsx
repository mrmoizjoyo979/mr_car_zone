import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id='hero' data-aos="zoom-out" className='min-h-screen bg-no-repeat bg-[url(/MainPic.png)] bg-cover'
    style={{backgroundSize: "45%" , backgroundPosition: "left 10px top 182px"}}
    >
      {<Navbar />}
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[50px] sm:text-[80px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p data-aos="zoom-out">Drive Away,</p>
            <p data-aos="zoom-out">With</p>
            <p className='text-red-600' data-aos="zoom-out">Confidence! </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
