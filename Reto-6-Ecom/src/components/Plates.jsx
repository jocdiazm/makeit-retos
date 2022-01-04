import PlateCard from './PlateCard';
import { usePlates } from './PlatesContext';

const Plates = () => {
  const { plates } = usePlates();
  return (
    <div className='plates__container'>
      {plates.map((plate) => (
        <PlateCard key={plate.name} plate={plate} />
      ))}
    </div>
  );
};

export default Plates;
