// Dependencies
import React from 'react';
import hero from '../../images/hero/2021-whm-hero.jpg'
import Product from './Product';
import ctci from '../../images/products/ctci.png';
import sideTrak from '../../images/products/sideTrack.jpg';
import playstation from '../../images/products/playstation5.jpg';
import breville from '../../images/products/breville-bes870xl.jpg';
import airpods from '../../images/products/apple-airpods-pro.jpg';
import samsung from '../../images/products/samgsung-cj890.jpg';

// Styles
import '../../styles/main/Home.css';

const ctciPrice = .2349;
const sideTrakPrice = 6.2999;
const playstationPrice = 4.9999;
const brevillePrice = 6.9995;
const airpodsPrice = 2.1999;
const samsungPrice = 9.9999;

export default function Home() {
  return (
    <div className='home'>
      <div className='home-container'>
        <img
          className='home-image'
          src={hero} 
          alt='Hero'
        />

        <div className='home-row'>
          <Product
            id='12321341' 
            title='Cracking the Coding Interview - 6th Edition'
            price={(Math.round(ctciPrice.toFixed(2)*100))}
            image={ctci}
            rating={4}
          />
          <Product
            id='49538094'
            title='SideTrak Swivel Triple Portable Monitor for Laptop'
            price={(Math.round(sideTrakPrice.toFixed(2)*100))}
            image={sideTrak}
            rating={5}
          />
        </div>

        <div className='home-row'>
          <Product
            id='4903850'
            title='PlayStation 5 Console'
            price={(Math.round(playstationPrice.toFixed(2)*100))}
            image={playstation}
            rating={5}
          />
          <Product
            id='23445930'
            title='Breville BES870XL Espresso Machine'
            price={(Math.round(brevillePrice.toFixed(2)*100))}
            image={breville}
            rating={4}
          />
          <Product
            id='32543543'
            title='Apple AirPods Pro'
            price={(Math.round(airpodsPrice.toFixed(2)*100))}
            image={airpods}
            rating={5}
          />
        </div>

        <div className='home-row'>
          <Product
            id='90829332'
            title='Samsung C49J890DKN 49" Super Ultra-Wide Desktop Monitor'
            price={(Math.round(samsungPrice.toFixed(2)*100))}
            image={samsung}
            rating={4}
          />
        </div>
      </div>
    </div>
  )
};