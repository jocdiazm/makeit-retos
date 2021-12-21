import React from 'react';
import { useVotes } from './VotingContext';

import '../styles/components/VotingOptions.scss';

function VotingOptions(props) {
  const { option, setOption } = useVotes();
  const handleChange = ({ target }) => {
    setOption(() => (target.type !== 'checkbox' ? target.value : target.name));
  };
  return (
    <div className="voting__options">
      <div className="voting__options--title"> Ver</div>
      <div className="voting__options--choices">
        <label className="voting__options--label">
          <input
            type="radio"
            id="total"
            value="total"
            checked={option === 'total'}
            onChange={handleChange}
          />
          Total
        </label>
        <label className="voting__options--label">
          <input
            type="radio"
            id="percent"
            value="percent"
            checked={option === 'percent'}
            onChange={handleChange}
          />
          Porcentaje
        </label>
        <label className="voting__options--label">
          <input
            type="radio"
            id="both"
            value="both"
            checked={option === 'both'}
            onChange={handleChange}
          />
          Ambos
        </label>
      </div>
    </div>
  );
}

export default VotingOptions;
