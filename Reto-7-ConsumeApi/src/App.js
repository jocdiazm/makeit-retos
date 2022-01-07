/* eslint-disable react/jsx-wrap-multilines */
import './App.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Center,
  Pagination,
  AppShell,
  Header,
  Image,
  MantineProvider,
  ColorSchemeProvider,
} from '@mantine/core';
import CharacterGrid from './components/CharacterGrid';
import ToggleTheme from './components/ToggleTheme';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [activePage, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState();

  const [colorScheme, setColorScheme] = useState('dark');
  const toggleColorScheme = (value) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  };
  const onSelectMode = (mode) => {
    setColorScheme(mode);
    if (mode === 'dark') document.body.classList.add('dark-mode');
    else document.body.classList.remove('dark-mode');
  };
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

  useEffect(() => {
    // Add listener to update styles
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        onSelectMode(e.matches ? 'dark' : 'light');
      });

    // Setup dark/light mode for the first time
    onSelectMode(
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light',
    );
    // Remove listener
    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', () => {});
    };
  }, []);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={{ colorScheme }}>
        <AppShell
          padding='lg'
          header={
            <Header height={110} padding='md' width='auto'>
              <ToggleTheme />
              <Center>
                <Image
                  src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg'
                  width={200}
                  height='auto'
                  margin='auto'
                  alt='Random unsplash image'
                />
              </Center>
            </Header>
          }
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
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
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default App;
