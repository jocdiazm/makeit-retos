/* eslint-disable no-extend-native */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
import Day from './components/Day';
import './App.css';

const myDay = {
  dow: 6,
  date: 16,
  temp: 75,
  prec: 89,
  lowtemp: 60,
  weather: 'stormy',
};
const today = new Date();

Date.prototype.addDays = function (days) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};
const forecast = [
  {
    dow: today.addDays(0).getDay(),
    date: today.addDays(0).getDate(),
    temp: 20,
    prec: 95,
    lowtemp: 11,
    weather: 'stormy',
  },
  {
    dow: today.addDays(1).getDay(),
    date: today.addDays(1).getDate(),
    temp: 19,
    prec: 65,
    lowtemp: 12,
    weather: 'cloudy',
  },
  {
    dow: today.addDays(2).getDay(),
    date: today.addDays(2).getDate(),
    temp: 15,
    prec: 75,
    lowtemp: 10,
    weather: 'rainy',
  },
  {
    dow: today.addDays(3).getDay(),
    date: today.addDays(3).getDate(),
    temp: 28,
    prec: 45,
    lowtemp: 19,
    weather: 'sunny',
  },
  {
    dow: today.addDays(4).getDay(),
    date: today.addDays(4).getDate(),
    temp: 14,
    prec: 97,
    lowtemp: 10,
    weather: 'stormy',
  },
  {
    dow: today.addDays(5).getDay(),
    date: today.addDays(5).getDate(),
    temp: 23,
    prec: 74,
    lowtemp: 15,
    weather: 'partlyCloudy',
  },
  {
    dow: today.addDays(6).getDay(),
    date: today.addDays(6).getDate(),
    temp: 29,
    prec: 89,
    lowtemp: 20,
    weather: 'stormy',
  },
  {
    dow: today.addDays(7).getDay(),
    date: today.addDays(7).getDate(),
    temp: 21,
    prec: 89,
    lowtemp: 11,
    weather: 'stormy',
  },
];

const App = () => {
  return (
    <div className='App'>
      <div className='wrapper'>
        {forecast.map((day, index) => {
          return <Day day={day} />;
        })}
      </div>
    </div>
  );
};

export default App;
