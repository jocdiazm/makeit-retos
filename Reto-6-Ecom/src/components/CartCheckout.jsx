import { usePlates } from './PlatesContext';
import '../styles/components/CartCheckout.scss';

const CartCheckout = () => {
  const { cart, plates } = usePlates();
  const subTotal = Object.keys(cart).reduce((acc, curr) => {
    const { price } = plates.find((plate) => plate.name === curr);
    return acc + price * cart[curr];
  }, 0);
  const taxes = 0.19 * subTotal;
  const total = subTotal + taxes;
  return (
    <div className='checkout'>
      {Object.keys(cart).length > 0 ? (
        <div className='checkout__details'>
          <span>Subtotal:</span>
          <span className='checkout__details--subtotal'>
            ${subTotal.toFixed(2)}
          </span>
          <span>Taxes: </span>
          <span className='checkout__details--taxes'>${taxes.toFixed(2)}</span>
          <span>Total: </span>
          <span className='checkout__details--total'>${total.toFixed(2)}</span>
        </div>
      ) : null}
    </div>
  );
};

export default CartCheckout;
