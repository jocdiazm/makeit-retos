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

  const secondaryColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <div style={{ width: 250, margin: 'auto' }}>
      <Card shadow='md' padding='lg'>
        <Card.Section>
          <Image
            src={character.image}
            height={160}
            alt={character.name}
            fit='contain'
          />
        </Card.Section>
        <Group
          position='apart'
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={500}>{character.name}</Text>
          <Badge
            color={character.status === 'Alive' ? 'green' : 'red'}
            variant='light'
          >
            {character.status}
          </Badge>
        </Group>
        <Text size='sm' style={{ color: secondaryColor, lineHeight: 1.5 }}>
          Species: {character.species}
        </Text>
        <Text size='sm' style={{ color: secondaryColor, lineHeight: 1.5 }}>
          Gender: {character.gender}
        </Text>
        <Text size='sm' style={{ color: secondaryColor, lineHeight: 1.5 }}>
          Last known location : {character.location.name}
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
