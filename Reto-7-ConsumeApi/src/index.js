/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { AppShell, Header, Image, MantineProvider, Title } from '@mantine/core';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <AppShell
        padding='lg'
        header={
          <Header height={110} padding='md'>
            <div
              style={{
                height: 100,
                width: 'auto',
                display: 'flex',
                flexFlow: 'row wrap',
                justifyContent: 'center',
              }}
            >
              <Image
                radius='md'
                src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg'
                width={200}
                height='auto'
                margin={0}
                alt='Random unsplash image'
              />
              <Title order={4} align='center'>
                Character List
              </Title>
            </div>
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
        <App />
      </AppShell>
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
