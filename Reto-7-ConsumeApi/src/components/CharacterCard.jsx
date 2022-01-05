/* eslint-disable no-unused-vars */
import {
  Card,
  Image,
  Text,
  Badge,
  Group,
  useMantineTheme,
} from '@mantine/core';

import propTypes from 'prop-types';

const CharacterCard = ({ character }) => {
  const theme = useMantineTheme();

  const badgeColor = {
    Alive: 'green',
    Dead: 'red',
  };

  const secondaryColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <div style={{ width: 250, margin: 'auto' }}>
      <Card shadow='md' padding='xs' radius='md' style={{ height: 390 }}>
        <Card.Section>
          <Badge
            color={badgeColor[character.status] || 'gray'}
            size='lg'
            variant='filled'
            style={{ position: 'absolute', right: 5, top: 220, zIndex: 10 }}
          >
            {`${character.status}`}
          </Badge>
          <Badge
            color='dark'
            size='lg'
            variant='filled'
            style={{
              borderRadius: 5,
              position: 'absolute',
              left: 0,
              top: 0,
              zIndex: 10,
            }}
          >
            {`#${character.id}`}
          </Badge>
          <Image
            src={character.image}
            width={250}
            height='auto'
            alt={character.name}
            fit='contain'
          />
        </Card.Section>
        <Group
          position='apart'
          style={{ marginBottom: 5, marginTop: theme.spacing.xs }}
        >
          <Text size='lg' weight={700}>
            {character.name}
          </Text>
        </Group>
        <Text size='sm' style={{ color: secondaryColor, lineHeight: 1.5 }}>
          <Text size='sm' component='span' weight={700}>
            Species:
          </Text>{' '}
          {character.species}
        </Text>
        <Text size='sm' style={{ color: secondaryColor, lineHeight: 1.5 }}>
          <Text size='sm' component='span' weight={700}>
            Gender:
          </Text>{' '}
          {character.gender}
        </Text>
        <Text
          size='sm'
          style={{ color: secondaryColor, lineHeight: 1.5 }}
          lineClamp={2}
        >
          <Text size='sm' component='span' weight={700}>
            Last Location:
          </Text>{' '}
          {character.location.name}
        </Text>
      </Card>
    </div>
  );
};

CharacterCard.propTypes = {
  character: propTypes.shape({
    id: propTypes.number,
    name: propTypes.string,
    status: propTypes.string,
    species: propTypes.string,
    type: propTypes.string,
    gender: propTypes.string,
    origin: propTypes.string,
    location: propTypes.string,
    created: propTypes.string,
    image: propTypes.string,
  }).isRequired,
};

export default CharacterCard;
