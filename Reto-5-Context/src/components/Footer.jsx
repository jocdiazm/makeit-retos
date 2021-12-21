import React from 'react';
import '../styles/components/Footer.scss';

const Footer = () => {
  const imgSrc =
    'https://makeitreal.camp/assets/logo-black-baffa903a5ee8ad3c94f085fd551487207b3eeae296f2331880f8004b2af7743.png';
  return (
    <div className='footer'>
      <span>
        {' '}
        Hecho con ❤️ by{' '}
        <a className='hero' href='https://github.com/jocdiazm'>
          @jocdiazm
        </a>{' '}
        para{' '}
      </span>

      <img src={imgSrc} alt='Make It Real' />
    </div>
  );
};

export default Footer;
