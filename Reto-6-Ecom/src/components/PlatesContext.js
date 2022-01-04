/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, createContext, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import menuPlates from '../assets';

const PlatesContext = createContext();

export const PlatesProvider = ({ children }) => {
  const [plates, setPlates] = useState([]);
  const [cart, setCart] = useState({});
  useEffect(() => {
    setPlates([...menuPlates]);
    // setCart({ [menuPlates[0].name]: 2 });
    setCart({});
  }, []);

  const propsToPass = {
    plates,
    setPlates,
    cart,
    setCart,
  };

  return (
    <PlatesContext.Provider value={propsToPass}>
      {children}
    </PlatesContext.Provider>
  );
};

// 3. Consumir el contexto
export const usePlates = () => {
  const context = useContext(PlatesContext);
  if (context === undefined) {
    throw new Error('useContext debe estar dentro de PlatesContext');
  }
  return context;
};
PlatesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
