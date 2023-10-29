

import React , { useEffect, useState } from 'react';
import './IntroSection.css';

import LogoPic from '../assets/logo.png';
import Android from '../assets/android.png';
import IOS from '../assets/apple.png';
import Platform from '../assets/platform1.png';
import Ball1 from '../assets/ball1.png';
import Ball2 from '../assets/ball2.png';
import Phone1 from '../assets/phone1.png';
import Phone2 from '../assets/phone2.png';


export const IntroSection = () => {


    
        const [isScrolled, setIsScrolled] = useState(false);
      
        useEffect(() => {
          // Function to handle scroll event
          const handleScroll = () => {
            if (window.scrollY > 100) {
              setIsScrolled(true);
            } else {
              setIsScrolled(false);
            }
          };
          window.addEventListener('scroll', handleScroll);

          // Clean up the event listener
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);

  return (
    <div className='IntroSectionContainer'>
        <div className='TextContainer'>
            <div className='TitleOFIntro'>
            <img className='logoContainer' src={LogoPic} alt="Logo" />
            <h1>Ferez </h1>
            </div>
            <h4>A Revolution in Industrial Networking</h4>
            <p>Ferez connects industrial workers with their needs such as equipment, materials and services. Ferez makes it simple for people in the industry to find suppliers, partners and vendors in one place.
Whether you're buying or selling industrial equipment, materials, or services, or looking for a job or hire, Ferez is the perfect place for industrial professionals to connect and grow their network.</p>

        <div className='ButtomsContainers'>
            <div className='DownloadAppBtn'>
                <img src={Android} alt="" className='btnImage'/>
                <p>Android App</p>
            </div>
            <div className='DownloadAppBtn'>
                <img src={IOS} alt="" className='btnImage'/>
                <p>IOS App</p>
            </div>
        </div>
        </div>
        <div className='ImageContainer'>
            <img src={Ball1} alt="mainPic" className='imageBall1' />
            <img src={Phone1} alt="mainPic" className={`imagePhone1 sliding-image ${isScrolled ? 'scrolled' : ''}`} />
            <img src={Phone2} alt="mainPic" className={`imagePhone2 sliding-image ${isScrolled ? 'scrolled' : ''}`} />
            <img src={Ball2} alt="mainPic" className='imageBall2' />
            <img src={Platform} alt="mainPic" className='imagePlatform' />
        </div>
        
    </div>
 )
}
