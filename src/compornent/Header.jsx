import React from 'react'
import './Header.css';
import { FaPlay } from "react-icons/fa";
import bg from '../assets/bg.png'

const Header = () => {
  return (
    <div className='container mt-5'>
        <div className='gather'>
            <div>
                <h1 className='cather'>Gather your <br />Rare NFTs Has <br />Arrived</h1>
                <p className='started'>Get started witih the easiest and most <br /> secure platform to buy trade digital <br />
                <span><b>Art and NFT.S</b></span></p>
                <div className='d-flex e-more'>
                  <button className='explore'>Explore More</button>
                  <div className='d-flex play'>
                    <div className='FaPlay'> <FaPlay className='fa'/></div>
                    <a href="#" className='show'><b>Show Video</b></a>
                  </div>
                </div>
            </div>
            <div>
                <img src={bg} alt="Background" className='img1'/>
            </div>
        </div>
    </div>
  )
}

export default Header