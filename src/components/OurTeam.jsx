

import React from 'react'
import './OurTeam.css';

export const OurTeam = () => {
  return (
    <div className='TeamContainer'>

        <h3>Our Team</h3>
        <p>Made by professional experts</p>
        <p>Our team combines decades of experience in industrial manufacturing, logistics, systems design and more. We built the burr to address the real pain points in the industry that professionals like you face.</p>
        <div className='TeamCartsContainer'>
            <div className='TeamCarts'>
                <div className='TeamCartsImage'>
                    image
                </div>
                <div className='TeamCartsContent'>
                    <div>Name</div>
                    <div>Descriptions</div>
                </div>
            </div>
            <div className='TeamCarts'>
            <div className='TeamCartsImage'>
                    image
                </div>
                <div className='TeamCartsContent'>
                    <div>Name</div>
                    <div>Descriptions</div>
                </div>
            </div>
            <div className='TeamCarts'>
            <div className='TeamCartsImage'>
                    image
                </div>
                <div className='TeamCartsContent'>
                    <div>Name</div>
                    <div>Descriptions</div>
                </div>
            </div>
            <div className='TeamCarts'>
            <div className='TeamCartsImage'>
                    image
                </div>
                <div className='TeamCartsContent'>
                    <div>Name</div>
                    <div>Descriptions</div>
                </div>
            </div>
        </div>
    </div>
  )
}
