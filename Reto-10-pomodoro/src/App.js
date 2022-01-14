import gear from './images/gear.svg';
import './App.css';

const App = () => {
  return (
    <div className='wrapper'>
      <div className='ring'>
        <svg width='518' height='518' viewBox='0 0 518 518'>
          <circle strokeWidth='9px' x='0' y='y' cx='259' cy='259' r='254' />
        </svg>
      </div>

      <div className='timer'>
        <div className='time'>
          <div className='minutes'>
            <input type='text' value='15' disabled />
          </div>
          <div className='colon'>:</div>
          <div className='seconds'>
            <input type='text' value='00' disabled />
          </div>
        </div>
        <button type='button' className='start'>
          start
        </button>
        <button type='button' className='settings'>
          <img src={gear} alt='Settings' />
        </button>
      </div>
    </div>
  );
};

export default App;
