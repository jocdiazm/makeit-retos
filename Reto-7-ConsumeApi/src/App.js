/* eslint-disable no-unused-vars */
import './App.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Center, Pagination } from '@mantine/core';
import CharacterGrid from './components/ChracacterGrid';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [activePage, setPage] = useState(5);
  const [characters, setCharacters] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    'https://rickandmortyapi.com/api/character',
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [pages, setPages] = useState();
  useEffect(() => {
    const getCharacters = async () => {
      const res = await axios.get(currentPageUrl);
      const data = await res.data;
      setCharacters(data.results);
      setLoading(false);
      setNextPageUrl(data.info.next);
      setPrevPageUrl(data.info.prev);
      setPages(data.info.pages);
    };
    getCharacters();
  }, [currentPageUrl]);

  console.log(nextPageUrl, pages);

  return (
    <div>
      <CharacterGrid characters={characters} />
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
