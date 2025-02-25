// React & Libraries
import React from 'react';
import './MarketPlace.css'
import { Card, Badge, Row, Col } from 'react-bootstrap';
import { FaEthereum } from 'react-icons/fa';

// Styles & Assets
import './MarketPlace.css';
import cat1 from '../assets/cat1.png';
import cat2 from '../assets/cat2.png';
import cat3 from '../assets/cat3.png';
import cat4 from '../assets/cat4.png';
import cat5 from '../assets/cat5.png';
import cat6 from '../assets/cat6.png';

// NFT Data
const nftData = [
  {
    id: 1,
    image: cat1,
    title: "#7297 HAND-DROWN",
    tags: ["EPIC"],
    supply: "18 / 51",
    price: "0.1 wETH"
  },
  {
    id: 2,
    image: cat2,
    title: "#1245 JELLYDEEP OCEA",
    tags: ["EPIC"],
    supply: "15 / 30",
    price: "0.152 wETH"
  },
  {
    id: 3,
    image: cat3,
    title: "#2658 (B)APESTAVERSE",
    tags: ["EPIC"],
    supply: "11 / 60",
    price: "0.021 wETH"
  },
  {
    id: 4,
    image: cat4,
    title: "#1700 ESSENCE LINE",
    tags: ["EPIC"],
    supply: "22 / 35",
    price: "2.1 wETH"
  },
  {
    id: 5,
    image: cat5,
    title: "#4521 SKULLTOON 2001",
    tags: ["EPIC"],
    supply: "25 / 40",
    price: "1.1 wETH"
  },
  {
    id: 6,
    image: cat6,
    title: "#2354 BUILDER HOUSE",
    tags: ["EPIC"],
    supply: "45 / 70",
    price: "0.11 wETH"
  }
];

// Main Component
const MarketPlace = () => {
  return (
    <div className='container text-center' style={{marginTop: "100px"}}>
      {/* Header Section */}
      <h1 className='Marketplace'>
        Welcome To NFT’s <br /> Marketplace
      </h1>
      <p className='virtual'>
        Welcome to the virtual world’s one-stop-shop for the very best digital assets. Here you can <br />
        search and buy creator’s ASSET with SAND to incorporate them into your LAND
      </p>

      {/* Button Filters */}
      <div className='d-flex justify-content-between mt-5 new-but'>
        <button className='Newest'><b>Newest Items</b></button>
        <button className='Latest'><b>Latest Sales</b></button>
        <button className='Latest'><b>Latest Listing</b></button>
        <button className='Latest'><b>Parcel and Estates</b></button>
      </div>

      {/* NFT Cards Grid */}
      <Row className="g-4 mt-4">
        {nftData.map(nft => (
          <Col key={nft.id} xs={12} sm={6} md={4}>
            <Card className="nft-card text-white border-gradient rounded-4">
              <Card.Img variant="top" src={nft.image} className="rounded-4 img4" />
              <Card.Body>
                <Card.Title className="text-center">{nft.title}</Card.Title>
                <div className="d-flex justify-content-center gap-2 my-2">
                  {nft.tags.map((tag, index) => (
                    <Badge key={index} bg="primary"></Badge>
                  ))}
                </div>
                <div className="time-box d-flex gap-2 mt-1">
                  <span className="time" id='epic'>EPIC</span>
                  <span className="time">👛</span>
                  <span className="time">💰</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <small><b>{nft.supply}</b></small>
                  <div className="d-flex align-items-center">
                    <FaEthereum className="me-1" />
                    <span><b>{nft.price}</b></span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default MarketPlace;
