import './App.scss';
import PlateCard from './components/PlateCard';

import plates from './assets';

const App = () => {
  return (
    <div className='App'>
      <h1>Hola soy un eCommerce component 🚀</h1>
      <div className='plates__container'>
        {plates.map((plate) => (
          <PlateCard plate={plate} />
        ))}
      </div>
    </div>
  );
};

export default App;
