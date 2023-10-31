import React,{useState,useEffect, useRef} from 'react'
import './App.css';
import { ContactUs } from './components/ContactUs';
import { HowItImprove } from './components/HowItImprove';
import { HowItWorks } from './components/HowItWorks';
import { IntroSection } from './components/IntroSection';
import { KeyFeatures } from './components/KeyFeatures';
import { OurTeam } from './components/OurTeam';
import { StoryOfFerez } from './components/StoryOfFerez';


function App() {

  // const [activeTab, setActiveTab] = useState('IntroSection');

  // const sectionRefs = {
  //   IntroSection: useRef(),
  //   KeyFeatures: useRef(),
  //   HowItWorks: useRef(),
  //   OurTeam: useRef(),
  //   StoryOfFerez: useRef(),
  //   HowItImprove: useRef(),
  //   ContactUs: useRef(),
  // };

  // const handleTabClick = (tab) => {
  //   setActiveTab(tab);
  //   // Scroll to the selected component
  //   document.getElementById(tab).scrollIntoView({ behavior: 'smooth' });
  // };

  // const updateActiveTabOnScroll = () => {
  //   for (const section in sectionRefs) {
  //     const sectionRef = sectionRefs[section];
  //     if (sectionRef.current) {
  //       const rect = sectionRef.current.getBoundingClientRect();
  //       if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
  //         setActiveTab(section);
  //         break;
  //       }
  //     }
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', updateActiveTabOnScroll);
  //   return () => {
  //     window.removeEventListener('scroll', updateActiveTabOnScroll);
  //   };
  // }, []);

  return (
    <section  className='AppContainer'>
      
      {/* <div className="TabBar">
        <button 
        className={activeTab === 'IntroSection' ? 'active' : ''}
        onClick={() => handleTabClick('IntroSection')}>Intro</button>
        <button 
        className={activeTab === 'KeyFeatures' ? 'active' : ''}
        onClick={() => handleTabClick('KeyFeatures')}>Key Features</button>
        <button
        className={activeTab === 'HowItWorks' ? 'active' : ''}
        onClick={() => handleTabClick('HowItWorks')}>How It Works</button>
        <button
        className={activeTab === 'OurTeam' ? 'active' : ''}
        onClick={() => handleTabClick('OurTeam')}>Our Team</button>
        <button
        className={activeTab === 'StoryOfFerez' ? 'active' : ''}
        onClick={() => handleTabClick('StoryOfFerez')}>Story of Ferez</button>
        <button 
        className={activeTab === 'HowItImprove' ? 'active' : ''}
        onClick={() => handleTabClick('HowItImprove')}>How It Improves</button>
        <button 
        className={activeTab === 'ContactUs' ? 'active' : ''}
        onClick={() => handleTabClick('ContactUs')}>Contact Us</button>
      </div> */}

      {/* {Object.keys(sectionRefs).map((tab) => (
      <div
        key={tab}
        id={tab}
        ref={sectionRefs[tab]}
        className={activeTab === tab ? 'active' : ''}
      >
         {activeTab === tab && (
      // Conditionally render components based on the active tab
      <>
        {tab === 'IntroSection' && <IntroSection />}
        {tab === 'KeyFeatures' && <KeyFeatures />}
        {tab === 'HowItWorks' && <HowItWorks />}
        {tab === 'OurTeam' && <OurTeam />}
        {tab === 'StoryOfFerez' && <StoryOfFerez />}
        {tab === 'HowItImprove' && <HowItImprove />}
        {tab === 'ContactUs' && <ContactUs />}
      </>
    )}
      </div>
    ))} */}

<IntroSection/>
<KeyFeatures/>
<HowItWorks/>
<OurTeam />
<StoryOfFerez/>
<HowItImprove/>
<ContactUs />

   </section>
  );
}

export default App;
