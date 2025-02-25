import React from 'react'
import './Latest.css'
// import image from asserts
import vector9 from '../assets/vector9.png'
import vector10 from '../assets/vector10.png'
import vector11 from '../assets/vector11.png'
const Latest = () => {
  return (
    <div className='container text-white' style={{marginTop: "100px"}}>
      <div className='text-center text-white mt-5'>
        <h1 className='News'>Latest News From VECCI</h1>
      </div>
      <div className='latest-card mt-5'>
        <div className='buying'>
          <img src={vector9} alt='' className='img5'/>
          <h5><b>Buying NFT’s With credit <br /> Card Made Easy</b></h5>
          <p className='long'>
            It is a long established fact that a reader will be distracted by the readable.
          </p>
          <p className='text-center'><b><span className='Apr'>Apr 01</span>-15 min read</b></p>
          </div>
          <div className='buying'>
            <img src={vector10} alt='' className='img5' />
            <h5><b>NFTs on VECCI: A New <br />Innovation</b></h5>
            <p className='long'>
            It is a long established fact that a reader will be distracted by the readable.
            </p>
            <p className='text-center'><b><span className='Apr'>Apr 01</span>-15 min read</b></p>
          </div>
          <div className='buying'>
            <img src={vector11} alt='' className='img5' />
            <h5><b>VECCI Launches New NFT <br /> Marketplace</b></h5>
            <p className='long'>
            It is a long established fact that a reader will be distracted by the readable.
            </p>
            <p className='text-center'><b><span className='Apr'>Apr 01</span>-15 min read</b></p>
          </div>
        </div>
    </div>
  )
}

export default Latest