import { HorizontalBarChart } from 'simplify-chart';
import { useVotes } from './VotingContext';

const BarChart = () => {
  const { option, totalVotes, candidatesCount } = useVotes();

  const candidatesData = {
    ...Object.keys(candidatesCount).reduce((acc, curr) => {
      let candidate = candidatesCount[curr];
      switch (option) {
        case 'total':
          return { ...acc, [candidate.fullName]: candidate.votes };
        case 'percent':
          return {
            ...acc,
            [candidate.fullName]:
              Math.round((candidate.votes * 10000) / totalVotes) / 100,
          };
        case 'both':
          return {
            ...acc,
            [`${candidate.fullName} (${
              Math.round((candidate.votes * 10000) / totalVotes) / 100
            }%)`]: candidate.votes,
          };
        default:
          break;
      }
      return null;
    }, {}),
  };

  const sortDescending = (data) =>
    Object.entries(data)
      .sort(([, a], [, b]) => b - a)
      .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

  return (
    <HorizontalBarChart
      data={sortDescending(candidatesData)}
      options={{
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        padding: { top: 0, right: 0, bottom: 0, left: 0 },
        label: {
          width: 210,
          font: {
            fontSize: 16,
            fontWeight: 600,
            fontFamily: 'nunito',
          },
        },
        tick: {
          backgroundColor: '#00ADB5',
          borderRadius: 3,
          height: 25,
          paddin: {
            left: 0,
          },
        },
        tickLabel: {
          display: true,
          marginLeft: -45,
          font: {
            fontSize: 14,
            fontFamily: 'nunito',
            lineHeight: 'inherit',
            color: '#ffffff',
            fontWeight: 'bolder',
          },
        },
      }}
    />
  );
};

export default BarChart;
