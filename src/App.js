
import './App.css';
import { ContactUs } from './components/ContactUs';
import { HowItImprove } from './components/HowItImprove';
import { HowItWorks } from './components/HowItWorks';
import { IntroSection } from './components/IntroSection';
import { KeyFeatures } from './components/KeyFeatures';
import { OurTeam } from './components/OurTeam';
import { StoryOfFerez } from './components/StoryOfFerez';


function App() {
  return (
    <section >
        <IntroSection/>
        <KeyFeatures/>
        <HowItWorks/>
        <OurTeam/>
        <StoryOfFerez/>
        <HowItImprove/>
        <ContactUs/>
    </section>
  );
}

export default App;
