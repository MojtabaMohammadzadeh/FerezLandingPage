

import React, {useState} from 'react'
import './StoryOfFerez.css'

export const StoryOfFerez = () => {

    const [index, setIndex] = useState(2);

    const changeIndex=(i)=>{
        setIndex(i);
    }

  return (
    <div className='StoryContainer' >
        <div className='StoryTitle'>How did the story of Ferez begin?</div>
        <div className='StorySubTitle'>Inspired by real industry needs</div>
        <div className='StroyContent'>The idea of milling was born from the experiences of the industrial supply chain. We have seen firsthand how difficult it is to find the right suppliers and services at the right price. Freeze simplifies these challenges in a user-friendly platform for industry players.</div>

        <div className='StoryCartsList'>
            <div
            onClick={()=>changeIndex(1)}
            className={(index === 1)?`StorySelectedBox`:`StoryCart`}>
                <h4 className='StroyCartTitle'>+200</h4>
                <p className='StroyCartContent'>Brand</p>
            </div>
            <div 
            onClick={()=>changeIndex(2)}
            className={(index === 2)?`StorySelectedBox`:`StoryCart`}
            >
                <h4 className='StroyCartTitle'>+12000</h4>
                <p className='StroyCartContent'>Download</p>
            </div>
            <div 
            onClick={()=>changeIndex(3)}
            className={(index === 3)?`StorySelectedBox`:`StoryCart`}
            >
                <h4 className='StroyCartTitle'>+3</h4>
                <p className='StroyCartContent'>Year Activity</p>
            </div>
            <div
            onClick={()=>changeIndex(4)}
            className={(index === 4)?`StorySelectedBox`:`StoryCart`}
            >
                <h4 className='StroyCartTitle'>+100</h4>
                <p className='StroyCartContent'>Advertising</p>
            </div>
        </div>
    </div>
  )
}
