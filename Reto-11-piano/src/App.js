/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import piano from './data';
import './App.css';

const PianoKey = ({ audiofile, typeKey, d }) => {
  const audio = new Audio(audiofile);
  const start = () => {
    audio.play();
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
        {piano.map((key) => {
          return (
            <PianoKey
              audiofile={`./audio/key-${key.id}.mp3`}
              typeKey={`${key.typeKey}-keys`}
              d={key.d}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default App;
