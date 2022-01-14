/*eslint-disable*/
import {
  Modal,
  Button,
  Group,
  MantineProvider,
  TextInput,
} from '@mantine/core';
import { useState, useEffect, useRef } from 'react';
import gear from './images/gear.svg';
import './App.css';

const formatTime = (seconds) => {
  const minutes = `${Math.floor(seconds / 60)}`;
  const formatedSeconds = `0${seconds > 60 ? seconds % 60 : seconds}`.slice(-2);
  return `${seconds < 600 ? '0' : ''}${minutes}:${formatedSeconds}`;
};

const Countdown = ({ timeLeft, setTimeLeft, isActive }) => {
  // const [timeLeft, setTimeLeft] = useState(secondsTimer);

  // Add a ref to store the interval id
  const intervalRef = useRef();

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((t) => t - 1);
      }, 1000);
      return () => clearInterval(intervalRef.current);
    }
  }, [isActive]);

  // Add a listener to `timeLeft`
  useEffect(() => {
    if (timeLeft < 0) {
      clearInterval(intervalRef.current);
      setTimeLeft(0);
    }
  }, [timeLeft]);
  return <span>{formatTime(timeLeft)}</span>;
};

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [initialTimer, setInitialTimer] = useState(300);
  const [valueModal, setValueModal] = useState(initialTimer);
  const [timerSeconds, setTimerSeconds] = useState(initialTimer);
  const [currAction, setCurrAction] = useState('start');
  const [opened, setOpened] = useState(false);
  const handleOnClick = (e) => {
    console.log(`prev state: ${currAction}`);
    if (currAction == 'start') {
      setIsActive(true);
      setCurrAction('pause');
    } else if (currAction == 'pause') {
      setIsActive(false);
      setCurrAction('start');
    } else if (currAction == 'reset') {
      setIsActive(false);
      setTimerSeconds(initialTimer);
      setCurrAction('start');
    }
  };
  useEffect(() => {
    if (timerSeconds === 0) {
      setIsActive(false);
      setCurrAction('reset');
      if (!isActive) {
        setTimeout(() => {
          alert('Time is up!');
        }, 50);
      }
    }
  }, [timerSeconds, isActive]);

  return (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <div className='wrapper'>
        <div className={isActive ? 'ring' : 'ring ring__ending'}>
          <svg width='518' height='518' viewBox='0 0 518 518'>
            <circle strokeWidth='9px' x='0' y='y' cx='259' cy='259' r='254' />
          </svg>
        </div>

        <div className='timer'>
          <div className='time'>
            <Countdown
              timeLeft={timerSeconds}
              setTimeLeft={setTimerSeconds}
              isActive={isActive}
            />
          </div>
          <button type='button' className='start' onClick={handleOnClick}>
            {currAction}
          </button>
          <Modal
            opened={opened}
            size='sm'
            onClose={() => setOpened(false)}
            title='Set timer!'
            centered
          >
            <Group direction='column' position='center'>
              <TextInput
                value={Number(valueModal / 60).toFixed(0)}
                label='Minutos'
                type='number'
                onChange={(event) =>
                  setValueModal(event.currentTarget.value * 60)
                }
                size='sm'
              />
              <Button
                onClick={() => {
                  setTimerSeconds(valueModal);
                  setOpened(false);
                }}
              >
                Aceptar
              </Button>
            </Group>
          </Modal>
          <button type='button' className='settings'>
            <img src={gear} onClick={() => setOpened(true)} alt='Settings' />
          </button>
        </div>
      </div>
    </MantineProvider>
  );
};

export default App;
