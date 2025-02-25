import React from 'react'
import './Favorite.css'

// import image from asserts
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
const Favorite = () => {
  return (
    <div className='container Choose'>
      <div className='card-favo d-flex justify-content-between align-items-center mb-3 mt-5'>
        <div>
          <h2 className='favo'>Choose Your Favorite <br />Art, If You Want!</h2>
        </div>
        <div><p className='begin'>Begin with the simplest and most secure stage to purchas <br />and exchange advanced workmanship and NET’s</p>
        </div>
      </div>
      <div className='card-favo d-flex justify-content-between align-items-center mt-5'>
        <div className='d-flex align-items-center rounded-4 usd'>
          <div> <img src={img1} alt="" className='img2' /></div>
          <div>
            <h5 className='meta'><b>Metaclubbers <br />Metaculubbers #5138</b></h5>
            <span className='met'><b>⏰ Feb 18 2023 or 4:07 <br />4:25    USD 865.87</b></span>
            <button className='Details'>View Details</button>
          </div>
        </div>
        <div>
          <img src={img2} alt="" className='img3' />
        </div>
        <div>
          <img src={img3} alt="" className='img3' />
        </div>
      </div>
      <div className='text-center mt-5'><button className='viewall'>View All</button></div>
    </div>
  )
}

export default Favorite