import { Grid } from '@mantine/core';
import PropTypes from 'prop-types';

import CharacterCard from './CharacterCard';

const ChracacterGrid = ({ characters }) => {
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
        >
          <CharacterCard character={char} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

ChracacterGrid.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ChracacterGrid;
