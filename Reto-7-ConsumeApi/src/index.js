/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { AppShell, Header, MantineProvider } from '@mantine/core';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <AppShell
        padding='md'
        header={
          <Header height={40} padding='md'>
            {/* Header content */}
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
