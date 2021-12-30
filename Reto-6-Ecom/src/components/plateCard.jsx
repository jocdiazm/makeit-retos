import '../styles/components/PlateCard.scss';
import PropTypes from 'prop-types';

const PlateCard = ({ plate }) => {
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
        <button type='button'>Add to Cart</button>
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
