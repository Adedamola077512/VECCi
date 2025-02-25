import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import './Footer.css';

const Footer = () => {
  return (
    <div className='container text-white footer'>
      {/* Divider Line */}
      <hr className='hr' />

      {/* Navigation Links */}
      <div className='foot d-flex justify-content-between align-items-center'>
        <h1 className='gri'>VECCI</h1>
        <nav className='d-flex gap-4'>
          <a href="#" className='a-link'>Explore</a>
          <a href="#" className='a-link'>Marketplace</a>
          <a href="#" className='a-link'>Investor</a>
          <a href="#" className='a-link'>News</a>
        </nav>
      </div>

      {/* Footer Details */}
      <div className='up'>
        <div className='d-flex justify-content-between align-items-center mt-5 grid'>
          {/* Description */}
          <p>
            Get started with the easiest and most <br />
            secure platform to buy and trade digital
          </p>

          {/* Address */}
          <div className='d-flex align-items-center road'>
            <FaLocationDot className='FaLocationDot' />
            <p className='Intershore'>
              Intershore chambers, P O Box <br />
              4342, Road town, Tortola British <br />
              Virgin Islands
            </p>
          </div>
        </div>

        {/* Copyright and Contact */}
        <div className='d-flex justify-content-between align-items-center grid'>
          <p className='road'>Copyright © 2022 VEC Access, Inc</p>
          <p className='road'>
            <IoMdMail className='CiMail' /> Support@shovatstkhira.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
