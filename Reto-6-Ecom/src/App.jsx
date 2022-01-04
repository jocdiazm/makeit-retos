/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */

import Plates from './components/Plates';
import PlatesInCart from './components/PlatesInCart';
import CartCheckout from './components/CartCheckout';
import { PlatesProvider } from './components/PlatesContext';

import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <PlatesProvider>
        <div className='cart__container'>
          <span className='cart__container--title'>your cart</span>
          <PlatesInCart />
          <div className='cart__container--checkout'>
            <CartCheckout />
          </div>
        </div>
        <div className='menu__container'>
          <span className='menu__container--title'>to go menu</span>
          <Plates />
        </div>
      </PlatesProvider>
    </div>
  );
};

export default App;
