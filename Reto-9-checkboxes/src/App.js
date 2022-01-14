/*eslint-disable*/
import { useEffect, useState } from 'react';
import cover from './images/podcast-cover.png';
import episodes from './data';
import './App.css';

const getMinMax = (...args) => {
  const validEntries = [...args.filter((x) => x || x === 0)];
  return [Math.min(...validEntries), Math.max(...validEntries)];
};

const App = () => {
  //setting up just 10 eps
  const filteredEpisodes = episodes.slice(0, 10);

  const [checked, setChecked] = useState(filteredEpisodes.map((ep) => false));
  const [firstChecked, setFirstChecked] = useState();
  const [clickShiftPressed, setClickShiftPressed] = useState(false);

  //this keeps tracks if shift+click is pressed
  useEffect(() => {
    window.addEventListener(
      'click',
      (e) => {
        setClickShiftPressed(e.shiftKey);
      },
      false,
    );
  });

  const handleCheck = ({ target }) => {
    const newChecked = [...checked];
    const episodeId = Number(target.id);
    newChecked[episodeId] = target.checked;

    const newFirstChecked = newChecked.findIndex((ep) => ep === true);
    const [ini, end] = getMinMax(newFirstChecked, episodeId, firstChecked);
    setFirstChecked(ini);
    if (clickShiftPressed) {
      //this takes into the actual min, max index

      const shiftChecked = newChecked.map((curr, index) =>
        index >= ini && index <= end ? true : curr,
      );
      setChecked(shiftChecked);
    } else {
      setChecked(newChecked);
    }
  };

  const handleButtonClick = () => {
    setChecked(filteredEpisodes.map((ep) => true));
    setFirstChecked(0);
  };

  return (
    <div className='wrapper'>
      <div className='cover'>
        <img src={cover} alt='Compressed.fm' />
      </div>
      <div className='content'>
        <ul>
          {filteredEpisodes.map((episode, id) => {
            const listId = `${id}`;
            return (
              <li key={`ep-${id}`}>
                <label htmlFor={`${id}`}>
                  <input
                    type='checkbox'
                    name={`ep-${id}`}
                    id={listId}
                    onChange={handleCheck}
                    checked={checked[id]}
                  />
                  <span
                    style={{ userSelect: 'none' }}
                  >{`ep-${id} || ${episode.name}`}</span>
                </label>
              </li>
            );
          })}
          <button type='button' onClick={handleButtonClick}>
            Mark as Played
          </button>
        </ul>
      </div>
    </div>
  );
};

export default App;
