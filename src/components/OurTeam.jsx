

import React from 'react'
import './OurTeam.css';
import Hassanzadeh from '../assets/hasanzadeh.jpg';
import KaramoDini from '../assets/karamodini.jpg';
import ByMohammadi from '../assets/byMohammadi.jpg';
import Mohammadzadeh from '../assets/mohammadzadeh.jpg';
import Erfani from '../assets/Erfani.jpg';

export const OurTeam = () => {
  return (
    <div className='TeamContainer'>

        <h3 className='TeamTitle'>Our Team</h3>
        <p className='TeamSubTitle'>Made by professional experts</p>
        <p className='TeamText'>Our team combines decades of experience in industrial manufacturing, logistics, systems design and more. We built the burr to address the real pain points in the industry that professionals like you face.</p>
        <div className='TeamCartsContainer'>
        <div className='TeamCarts'>
            <div className='TeamCartsImage'>
                    <div className='AvatarCircle'>
                        <img src={Hassanzadeh} alt="Mr.hassanzadeh" className='AvatarCircle'/>
                    </div>
                </div>
                <div className='TeamCartsContent'>
                <div className='TeamName'>Mr.hassanzadeh</div>
                    <div className='TeamSubject'>Business Coach</div>
                    {/* <div className='TeamDescript'>Lea</div> */}
                </div>
            </div>
        <div className='TeamCarts'>
                <div className='TeamCartsImage'>
                <div >
                        <img  src={Erfani} alt="Mr.Erfani" className='AvatarCircle'/>
                    </div>
                </div>
                <div className='TeamCartsContent'>
                    <div className='TeamName'>Mr.Erfani</div>
                    <div className='TeamSubject'>Founder and Industrial manufacturer</div>
                    {/* <div className='TeamDescript'>Mobile App and FrontEnd Developer.</div> */}
                </div>
            </div>
            <div className='TeamCarts'>
                <div className='TeamCartsImage'>
                <div >
                        <img  src={Mohammadzadeh} alt="Mr.hassanzadeh" className='AvatarCircle'/>
                    </div>
                </div>
                <div className='TeamCartsContent'>
                    <div className='TeamName'>Mr.Mohammadzadeh</div>
                    <div className='TeamSubject'>Co-Founder and Developer</div>
                    {/* <div className='TeamDescript'>Mobile App and FrontEnd Developer.</div> */}
                </div>
            </div>
            
            <div className='TeamCarts'>
            <div className='TeamCartsImage'>
            <div className='AvatarCircle'>
                        <img src={ByMohammadi} alt="Mr.hassanzadeh" className='AvatarCircle'/>
                    </div>
                </div>
                <div className='TeamCartsContent'>
                <div className='TeamName'>Mr.Bymohammadi</div>
                    <div className='TeamSubject'>Devops and BackEnd Developer</div>
                </div>
            </div>
            <div className='TeamCarts'>
            <div className='TeamCartsImage'>
            <div className='AvatarCircle'>
                        <img src={KaramoDini} alt="Mr.hassanzadeh" className='AvatarCircle'/>
                    </div>
                </div>
                <div className='TeamCartsContent'>
                <div className='TeamName'>Mr.Karamaldini</div>
                    <div className='TeamSubject'>UI/UX Designer</div>
                </div>
            </div>
        </div>
    </div>
  )
}
