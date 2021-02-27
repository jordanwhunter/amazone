// Dependencies
import React from 'react';
import Product from './Product';
import ctci from '../../images/products/ctci.png';

// Icons

// Styles
import '../../styles/main/Home.css';

export default function Home() {
  return (
    <div className='home'>
      <div className='home-container'>
        <img
          className='home-image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' 
          alt='Hero'
        />

        <div className='home-row'>
          {/* Product */}
          <Product 
            title='Cracking the Coding Interview'
            price={23.99}
            image={ctci}
            rating={4.5}
          />
          {/* Product */}
          <Product />
        </div>

        <div className='home-row'>
          {/* Product */}
          <Product />
          {/* Product */}
          <Product />
          {/* Product */}
          <Product />
        </div>

        <div className='home-row'>
          {/* Product */}
          <Product />
        </div>
      </div>
    </div>
  )
};