import CandidateCard from './components/CandidateCard';
import TotalVotes from './components/TotalVotes';
import VotingOptions from './components/VotingOptions';

import { candidates, VotingProvider } from './components/VotingContext';

import './App.scss';
import BarChart from './components/BarChart';

function App() {
  return (
    <VotingProvider>
      <div className="voting__container">
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
    </VotingProvider>
  );
}

export default App;
