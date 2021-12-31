import './App.scss';
import PlateCard from './components/PlateCard';

import plates from './assets';

const App = () => {
  return (
    <div className='App'>
      <div className='menu__container'>
        <span className='menu__container--title'>to go menu</span>
        <div className='plates__container'>
          {plates.map((plate) => (
            <PlateCard plate={plate} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
