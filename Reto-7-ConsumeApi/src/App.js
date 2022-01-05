/* eslint-disable no-unused-vars */
import './App.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MantineProvider } from '@mantine/core';
import CharacterGrid from './components/ChracacterGrid';

const App = () => {
  const [loading, setLoading] = useState(true);
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

  console.log(nextPageUrl);

  return (
    <div>
      <CharacterGrid characters={characters} />
    </div>
  );
};

export default App;
