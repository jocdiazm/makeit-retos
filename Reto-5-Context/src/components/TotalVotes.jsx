import { useVotes } from './VotingContext';

import '../styles/components/TotalVotes.scss';

const TotalVotes = () => {
  const { totalVotes } = useVotes();
  return (
    <div className="voting__total-values">
      <p>total de votos: {totalVotes} </p>
    </div>
  );
};

export default TotalVotes;
