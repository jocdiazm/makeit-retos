import { useState } from 'react';

import '../styles/RangeSlider.css';

const RangeSlider = () => {
  const [price, setPrice] = useState(50);
  const handleChange = ({ target }) => {
    setPrice(target.value);
  };
  return (
    <div className='wrapper'>
      <div className='amount'>
        <span className='dollars'>${price}</span>
      </div>
      <input
        type='range'
        id='priceRange'
        name='priceRange'
        min='0'
        max='500'
        onChange={handleChange}
      />
      <br />
      <button type='button'>Comprar ahora</button>
    </div>
  );
};

export default RangeSlider;
