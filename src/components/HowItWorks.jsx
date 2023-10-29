
import React from 'react'
import './HowItWorks.css';
import BackGround from '../assets/backgrounf.png';
import Phone3 from '../assets/phone3.png';
import Ball1 from '../assets/ball1.png';
export const HowItWorks = () => {
  return (
    <div className='HTWContainer' 
    style={{backgroundImage: `url(${BackGround})`, 
    backgroundRepeat: "no-repeat",backgroundSize:"cover"}}>
        <div className='HTWTextContainer'>
        <h4 className='HTWTitle'>How dose Ferez work? </h4>
        
        <div className='HTWContent'>
          <div>
            <p className='HTWSubTitle'>Easy access to industry</p>
            <p>Ferez uses mobile technology and thoughtful design to simplify the industrial buying and selling process. Pricing lists, requirements boards, and industry tours create a seamless connection between buyers, sellers, and partners.</p>
          </div>
          <div>
            <p className='HTWSubTitle'>Two-way networking</p>
            <p>Users can save their favorite brands, services and products in personal lists for quick access. Professionals can also create customizable profiles to share their brand or services.</p>
          </div>
        </div>


        </div>
        <div className='HTWImageContainer'>
            <img src={Phone3} alt="mainPic" className='HTWimageClass' />
            <img src={Ball1} alt="mainPic" className='HTWimageClass2' />
        </div>
    </div>
  )
}
