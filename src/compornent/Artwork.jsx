import React from 'react';
import './Artwork.css';

const Artwork = () => {
  return (
    <div className="container art-work">
      {/* Statistics Section */}
      <div className="work">
        <div>
          <h5><b>27 k+</b></h5>
          <p>Art Work</p>
        </div>
        <div>
          <h5><b>20 k+</b></h5>
          <p>Auction</p>
        </div>
        <div>
          <h5><b>7 k+</b></h5>
          <p>Artist</p>
        </div>
      </div>

      {/* Countdown Card */}
      <div className="countdown-card p-3 rounded-4 text-white">
        <div className="d-flex justify-content-between mb-3">
          <div>
            <small>Ending in</small>
            <div className="time-box d-flex gap-2 mt-1">
              <span className="time">1h</span>
              <span className="time">20m</span>
              <span className="time">50s</span>
            </div>
          </div>
          <div className="text-end">
            <small>Highest Bid</small>
            <div className="mt-1">32.4 ETH</div>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <button className="btn purchase-btn">Purchase</button>
          <button className="btn bid-btn">Place a Bid</button>
        </div>
      </div>
    </div>
  );
};

export default Artwork;
