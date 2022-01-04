/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */

import { usePlates } from './PlatesContext';
import PlateInCart from './PlateInCart';

const PlatesInCart = () => {
  const { plates, cart } = usePlates();
  const filteredPlates = plates.filter((plate) => {
    return Object.keys(cart).includes(plate.name);
  });
  return (
    <div className='cart__container--plates'>
      {Object.keys(cart).length ? (
        filteredPlates.map((plate) => (
          <PlateInCart key={`${plate.name}-cart`} plate={plate} />
        ))
      ) : (
        <div className='cart__container--empty'>
          <span>El carrito está vacío.</span>
        </div>
      )}
    </div>
  );
};

export default PlatesInCart;
