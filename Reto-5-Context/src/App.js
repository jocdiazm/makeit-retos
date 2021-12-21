import CandidateCard from './components/CandidateCard';
import TotalVotes from './components/TotalVotes';
import VotingOptions from './components/VotingOptions';
import Footer from './components/Footer';

import { candidates, VotingProvider } from './components/VotingContext';

import './App.scss';
import BarChart from './components/BarChart';

function App() {
  return (
    <VotingProvider>
      <div className="layout">
        <div className="voting__container">
          <h1> ¡Vota por tu mentor Favorito!</h1>
          <div className="voting__candidates">
            {Object.keys(candidates).map((id) => (
              <CandidateCard
                key={`${id}-cand`}
                candidateId={id}
                candidate={candidates[id]}
              />
            ))}
          </div>
          <div className="voting__results">
            <VotingOptions />
            <div className="voting__results--values">
              <TotalVotes />
              <BarChart />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </VotingProvider>
  );
}

export default App;
