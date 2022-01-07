import { Grid, Skeleton } from '@mantine/core';
import PropTypes from 'prop-types';

import CharacterCard from './CharacterCard';

const CharacterGrid = ({ characters, loading }) => {
  return (
    <Grid columns={18} justify='center' align='center' gutter='lg'>
      {characters.map((char) => (
        <Grid.Col
          span={18}
          xs={9}
          sm={9}
          md={6}
          lg={4}
          style={{ maxHeight: 420 }}
          key={`character-${char.id}`}
        >
          <Skeleton visible={loading} animate={false}>
            <CharacterCard character={char} />
          </Skeleton>
        </Grid.Col>
      ))}
    </Grid>
  );
};

CharacterGrid.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default CharacterGrid;
