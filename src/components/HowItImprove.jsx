
import React from 'react'
import './HowItImprove.css'
import {AiFillCheckCircle} from 'react-icons/ai';

export const HowItImprove = () => {
  return (
    <div className='HTIContainer'>
    
    <div className='HTIImageContainer'>
        {/* <img src={MainPic} alt="mainPic" className='imageClass' /> */}
    </div>
    <div className='HTITextContainer'>
        <div className='HTITitleOFIntro'>
       
        <h1>How does Ferez improve the industrial world? </h1>
        </div>
        <h4>Freeze changes industrial networks, sourcing and collaboration in several ways:</h4>
        <div className='HTIListTiles'>
                <AiFillCheckCircle/>
                <p className='HTIListTilesText'>It simplifies sourcing by centralizing suppliers, products and pricing in one place.</p>
            </div>
            <div className='HTIListTiles'>
                <AiFillCheckCircle/>
                <p className='HTIListTilesText'>It provides a better way for industrial businesses to communicate with customers and partners.</p>
            </div>
            <div className='HTIListTiles'>
                <AiFillCheckCircle/>
                <p className='HTIListTilesText'>Allows professionals to easily discover and review industry providers.</p>
            </div>
            <div className='HTIListTiles'>
                <AiFillCheckCircle/>
                <p className='HTIListTilesText'>It strengthens the industry community and facilitates valuable interactions between users.</p>
            </div>
            <div className='HTIListTiles'>
                <AiFillCheckCircle/>
                <p className='HTIListTilesText'>Simplifies complex workflows, communication and decision making on procurement and projects.</p>
            </div>
            <div className='HTIListTiles'>
                <AiFillCheckCircle/>
                <p className='HTIListTilesText'>It saves professionals time and hassle by replacing inefficient sourcing processes.</p>
            </div>
    </div>
</div>
  )
}
