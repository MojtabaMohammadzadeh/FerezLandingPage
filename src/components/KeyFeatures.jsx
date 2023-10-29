import React from 'react'
import FeaturesPic from '../assets/pic.png';
import {AiFillCheckCircle} from 'react-icons/ai';
import './KeyFeatures.css';
import Pic1 from '../assets/pic1.png';
import Pic2 from '../assets/pic2.png';
import Pic3 from '../assets/pic3.png';

export const KeyFeatures = () => {
  return (
    <div className='KeyContainer'>
        {/* ******************Top Section ****************************** */}
        <section className='TopSection'>
        <div className='keyFeaturesPic'>
            <img src={FeaturesPic} alt="" />
        </div>
        <div className='KeyFeaturesContent'>
            <p className='KeyTitle'>Key Features</p>
            <p className='KeySubTitle'>Industry in your pocket</p>
            <p className='KeyText'>Ferez provides turnkey solutions for industrial professionals and brings buyers and sellers together in the industrial space!</p>
            <div className='ListTiles'>
                <AiFillCheckCircle/>
                <p className='ListTilesText'>Discover suppliers, vendors and partners.</p>
            </div>
            <div className='ListTiles'>
                <AiFillCheckCircle/>
                <p className='ListTilesText'>Easily search for materials, services and industrial equipment.</p>
            </div>
            <div className='ListTiles'>
                <AiFillCheckCircle/>
                <p className='ListTilesText'>Showcase your industrial needs.</p>
            </div>
            <div className='ListTiles'>
                <AiFillCheckCircle/>
                <p className='ListTilesText'>Be informed about the latest prices of materials, equipment and industrial services.</p>
            </div>
            <div className='ListTiles'>
                <AiFillCheckCircle/>
                <p className='ListTilesText'>Share your activities.</p>
            </div>
            <div className='ListTiles'>
                <AiFillCheckCircle/>
                <p className='ListTilesText'>Connect with the industry community.</p>
            </div>
        </div>
        </section>
        {/* ***********************Bottom Section *************************************** */}
        <section className='BottomSection'>
            <div className='BootomBox'>
                <img className='BottomPic' src={Pic1} alt="" />
                <h6 className='BootomBoxTitle'>Bands List</h6>
                <p className='BootomBoxContent'>Search, filter and explore brands and products in our comprehensive directory and start your relationship with them.</p>
                </div>            
            <div className='BootomBox'>
                <img className='BottomPic' src={Pic2} alt="" />
                <h6 className='BootomBoxTitle'>Prices List</h6>
                <p className='BootomBoxContent'>View and compare the updated prices of industrial equipment, materials and services in different categories.</p>
                </div>            
            <div className='BootomBox'>
            <img className='BottomPic' src={Pic3} alt="" />
                <h6 className='BootomBoxTitle'>Requirements and Explore</h6>               
                <p className='BootomBoxContent'>Advertising requirements for materials, equipment and services. Find and connect with new ads.</p>
                </div>            
        </section>
    </div>
  )
}
