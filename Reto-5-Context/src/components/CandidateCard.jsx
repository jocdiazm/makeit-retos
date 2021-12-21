import React from 'react';
import VoteButton from './VoteButton';
import '../styles/components/CandidateCard.scss';

const CandidateCard = (props) => {
  const { candidateId, candidate } = props;
  return (
    <div className="voting__card">
      <h3 className="voting__card--name">{candidate.fullName}</h3>
      <div className="voting__card--photo">
        <img src={candidate.img} alt={candidate.fullName} />
      </div>
      <VoteButton candidateId={candidateId} candidate={candidate} />
    </div>
  );
};

export default CandidateCard;
