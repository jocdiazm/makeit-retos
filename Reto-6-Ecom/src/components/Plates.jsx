import { usePlates } from './PlatesContext';
import PlateCard from './PlateCard';

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
