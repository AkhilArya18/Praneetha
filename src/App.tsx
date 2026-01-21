
import Hero from './components/Hero';
import Journey from './components/Journey';
import Moments from './components/Moments';
import LoveTexts from './components/LoveTexts';
import Feelings from './components/Feelings';
import Quotes from './components/Quotes';
import Reasons from './components/Reasons';
import Promises from './components/Promises';
import Future from './components/Future';
import Proposal from './components/Proposal';
import GravityCursor from './components/GravityCursor';

import BackgroundFloating from './components/BackgroundFloating';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-transparent selection:bg-rose-gold/30">
      <BackgroundFloating />
      <GravityCursor />
      <Hero />
      <Journey />
      <Moments />
      <LoveTexts />
      <Feelings />
      <Quotes />
      <Reasons />
      <Promises />
      <Future />
      <Proposal />

      <footer className="py-10 text-center text-gray-400 text-sm bg-white">
        <p>Made with love, for Sunaina.</p>
      </footer>
    </div>
  );
}

export default App;
