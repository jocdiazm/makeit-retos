/* eslint-disable react/prop-types */
const assets = {
  cloudy: 'cloudy.svg',
  low: 'low.svg',
  partlyCloudy: 'partly-cloudy.svg',
  precipitation: 'precipitation.svg',
  rainy: 'rainy.svg',
  snowy: 'snowy.svg',
  stormy: 'stormy.svg',
  sunny: 'sunny.svg',
};

const daysOfWeekMap = {
  0: 'DOM',
  1: 'LUN',
  2: 'MAR',
  3: 'MIE',
  4: 'JUE',
  5: 'VIE',
  6: 'SAB',
};

const iconNameToSizeMap = {
  cloudy: { width: 264, height: 166 },
  sunny: { width: 208, height: 213 },
  stormy: { width: 246, height: 187 },
  snowy: { width: 230, height: 196 },
  partlyCloudy: {
    width: 230,
    height: 209,
  },
  rainy: { width: 160, height: 222 },
};

const Day = ({ day }) => {
  const { dow, date, temp, prec, lowtemp, weather } = day;
  const styleWeather = iconNameToSizeMap[weather];
  return (
    <div className='day'>
      <div className='day-of-week'>{daysOfWeekMap[dow]}</div>
      <div className='date'>{date}</div>

      <div className={`bar ${weather}`}>
        <div className='weather'>
          <img
            style={styleWeather}
            src={`../images/${assets[weather]}`}
            alt=''
          />
        </div>
        <div className='temperature'>
          {temp}
          <span className='degrees'>&deg;</span>
        </div>
        <div className='content'>
          <div className='precipitation'>
            <img
              style={{ fill: 'white', color: 'white' }}
              src={`../images/${assets.precipitation}`}
              alt=''
            />
            {prec}%
          </div>
          <div className='low'>
            <img
              style={{ fill: 'white', color: 'white' }}
              src={`../images/${assets.low}`}
              alt=''
            />
            {lowtemp}&deg;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Day;
