import PropTypes from 'prop-types';
import { usePlates } from './PlatesContext';
import { plateAssets } from '../assets';

import '../styles/components/PlateCard.scss';

const PlateCard = ({ plate }) => {
  const { cart, setCart } = usePlates();
  const handleAddToCart = () => {
    setCart({ ...cart, [plate.name]: (cart[plate.name] || 0) + 1 });
  };
  return (
    <div className='plate-card'>
      <div className='plate-card__img'>
        <img src={plate.img} alt={plate.name} />
      </div>
      <div className='plate-card__details'>
        <span className='plate-card__details--title'>{plate.name}</span>
        <span className='plate-card__details--price'>
          {`$ ${plate.price.toFixed(2)}`}
        </span>
        {!Object.keys(cart).includes(plate.name) ? (
          <button type='button' onClick={handleAddToCart}>
            Add to Cart
          </button>
        ) : (
          <button type='button' disabled>
            <img src={plateAssets.check} alt={`${plate.name} in cart`} />
            <span> In cart</span>
          </button>
        )}
      </div>
      <div className='plate-card__background' />
    </div>
  );
};

PlateCard.propTypes = {
  plate: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default PlateCard;
