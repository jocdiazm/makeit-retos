import { Center, Text, Image } from '@mantine/core';

const Footer = () => {
  const imgSrc =
    'https://user-images.githubusercontent.com/13368066/148625047-dfc04e7a-6292-4bb3-b3a3-2ca6ad0895a6.png';
  return (
    <Center
      style={{
        marginTop: 20,
        borderTop: 'solid 2px rgba(134, 142, 150,0.2)',
        paddingTop: 10,
      }}
    >
      <Text color='dimmed'>
        <Text component='span'>
          {'Hecho con ❤️ by  '}
          <Text
            variant='link'
            component='a'
            inherit
            href='https://github.com/jocdiazm'
            style={{ textDecoration: 'none' }}
            color='cyan'
          >
            {'@jocdiazm '}
          </Text>
          {'en '}
        </Text>
      </Text>
      <div style={{ marginLeft: 5 }}>
        <Image height={20} width='auto' src={imgSrc} alt='Make It Real' />{' '}
      </div>
    </Center>
  );
};

export default Footer;
