import './App.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Center, Pagination } from '@mantine/core';
import CharacterGrid from './components/CharacterGrid';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [activePage, setPage] = useState(2);
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState();
  useEffect(() => {
    const getCharacters = async () => {
      setLoading(true);
      const currentPageUrl = `https://rickandmortyapi.com/api/character?page=${activePage}`;
      const res = await axios.get(currentPageUrl);
      const data = await res.data;
      setCharacters(data.results);
      setPages(data.info.pages);
      setLoading(false);
    };
    getCharacters();
  }, [activePage]);

  return (
    <div>
      <Center>
        <Pagination
          page={activePage}
          onChange={setPage}
          total={pages}
          siblings={1}
          style={{ marginBottom: 20 }}
        />
      </Center>

      <CharacterGrid characters={characters} loading={loading} />

      <Center>
        <Pagination
          page={activePage}
          onChange={setPage}
          total={pages}
          siblings={1}
          style={{ marginTop: 20 }}
        />
      </Center>
    </div>
  );
};

export default App;
