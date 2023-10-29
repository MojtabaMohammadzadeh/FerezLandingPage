

import React from 'react'
import './StoryOfFerez.css'

export const StoryOfFerez = () => {
  return (
    <div className='StoryContainer' >
        <div className='StoryTitle'>How did the story of Ferez begin?</div>
        <div className='StorySubTitle'>Inspired by real industry needs</div>
        <div className='StroyContent'>The idea of milling was born from the experiences of the industrial supply chain. We have seen firsthand how difficult it is to find the right suppliers and services at the right price. Freeze simplifies these challenges in a user-friendly platform for industry players.</div>

        <div className='StoryCartsList'>
            <div className='StoryCart'>
                <h4 className='StroyCartTitle'>+200</h4>
                <p className='StroyCartContent'>Advertising</p>
            </div>
            <div className='StoryCart'>
                <h4 className='StroyCartTitle'>+200</h4>
                <p className='StroyCartContent'>Advertising</p>
            </div>
            <div className='StoryCart'>
                <h4 className='StroyCartTitle'>+200</h4>
                <p className='StroyCartContent'>Advertising</p>
            </div>
            <div className='StoryCart'>
                <h4 className='StroyCartTitle'>+200</h4>
                <p className='StroyCartContent'>Advertising</p>
            </div>
        </div>
    </div>
  )
}
