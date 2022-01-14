/* eslint-disable */
import './App.css';

import piano from './data';

const PianoKey = ({ audiofile, typeKey, d }) => {
  const audio = new Audio(audiofile);
  const start = async () => {
    try {
      await audio.play();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <a onClick={start}>
      <path className={typeKey} d={d} />
    </a>
  );
};

const App = () => {
  return (
    <div className='piano'>
      <svg
        width='1387'
        height='467'
        viewBox='0 0 1387 467'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        {piano.map((key, index) => {
          return (
            <PianoKey
              audiofile={`./audio/key-${key.id}.mp3`}
              typeKey={`${key.typeKey}-keys`}
              d={key.d}
              id={index}
              key={index}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default App;
