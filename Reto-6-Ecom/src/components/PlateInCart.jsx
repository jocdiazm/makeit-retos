import PropTypes from 'prop-types';
import { plateAssets } from '../assets';
import { usePlates } from './PlatesContext';

import '../styles/components/PlateInCart.scss';

const PlateInCart = ({ plate }) => {
  const { cart, setCart } = usePlates();

  const quantity = cart[plate.name];

  const handleClickButton = ({ target }) => {
    switch (target.name) {
      case 'increase':
        setCart({ ...cart, [plate.name]: cart[plate.name] + 1 });
        break;
      case 'reduce':
        {
          let newCart = { ...cart };
          if (cart[plate.name] > 1) {
            newCart = { ...cart, [plate.name]: cart[plate.name] - 1 };
          } else {
            delete newCart[plate.name];
          }
          setCart(newCart);
        }
        break;
      default:
        break;
    }
  };
  return (
    <div className='plate-card__container'>
      <div className='plate-card__thumbnail'>
        <img src={plate.img} alt={plate.name} />
        <div className='plate-card__thumbnail--circle'>
          <span>{quantity}</span>
        </div>
      </div>
      <div className='plate-card__description'>
        <span className='plate-card__description--name'>{plate.name}</span>
        <span className='plate-card__description--price'>{`$${plate.price}`}</span>
        <div className='plate-card__description--modify-order'>
          <input
            type='image'
            src={plateAssets.chevron}
            name='reduce'
            alt='reduce quantity'
            className='btn__reduce'
            onClick={handleClickButton}
          />
          <span className='quantity'>{quantity}</span>
          <input
            type='image'
            src={plateAssets.chevron}
            name='increase'
            alt='reduce quantity'
            className='btn__increase'
            onClick={handleClickButton}
          />
          <span className='total-price'>
            {`$${(quantity * plate.price).toFixed(2)}`}
          </span>
        </div>
      </div>
    </div>
  );
};
PlateInCart.propTypes = {
  plate: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default PlateInCart;
