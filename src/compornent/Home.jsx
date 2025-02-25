import React from 'react'
import './Home.css'

// import image from asserts
import vector1 from '../assets/Vector1.png';
import vector2 from '../assets/Vector2.png';
import vector3 from '../assets/Vector3.png';
import vector4 from '../assets/Vector4.png';
import vector5 from '../assets/Vector5.png';
import vector6 from '../assets/Vector6.png';
import vector7 from '../assets/Vector7.png';
import vector8 from '../assets/Vector8.png';


const Home = () => {
  return (
    <div className='container text-white text-center home-con'>
      <div>
        <h1 className='world'><b>Home To World’s <br />Most Trusted Community</b></h1>
        <p className='flow'>Flow easy to use and powerful to build with. Every aspect of the platform was designed the ground to up to dupport <br /> exeptional user experience at mainstream, originally conceived by the team today is a decentralized network <br />supported and built on by a growing community.</p>
      </div>
      <marquee direction="right">
      <div className='d-flex mt-5 justify-content-around gap'>
        <img src={vector1} alt="vector1" className="vector1" />
        <img src={vector2} alt="vector2" className="vector1" />
        <img src={vector3} alt="vector3" className="vector1" />
        <img src={vector4} alt="vector4" className="vector2" />
      </div>
      </marquee>
      <marquee direction="left">
      <div className='d-flex mt-4 justify-content-around'>
        <img src={vector5} alt="vector5" className="vector1" />
        <img src={vector6} alt="vector6" className="vector1" />
        <img src={vector7} alt="vector7" className="vector1" />
        <img src={vector8} alt="vector8" className="vector1" />
      </div>
      </marquee>
    </div>
  )
}

export default Home