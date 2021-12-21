import React, { useEffect } from 'react';
import { useVotes } from './VotingContext';

import '../styles/components/VoteButton.scss';

function VoteButton(props) {
  const { setTotalVotes, candidatesCount, setCandidatesCount } = useVotes();
  const { candidateId, candidate } = props;
  const candidates = candidatesCount;

  const voteHandler = () => {
    candidate.votes++;
    setCandidatesCount({ ...candidates, [candidateId]: candidate });
  };
  useEffect(() => {
    setTotalVotes(
      Object.keys(candidatesCount)
        .map((candidateId) => candidatesCount[candidateId].votes)
        .reduce((acc, curr) => acc + curr, 0)
    );
  }, [candidatesCount, setTotalVotes]);
  return (
    <div className="voting__button">
      <button onClick={voteHandler} type="button">
        Votar
      </button>
    </div>
  );
}

export default VoteButton;
