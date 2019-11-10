import React from 'react';
import { ValueList, FirstValue, Head, Type, LineChartContainer } from './app.styles';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';

const renderLineChart = values => {
  // name: time
  // val: value

  const data = Object.keys(values)
    .map((key, idx) => {
      return {
        name: key
          .split(' ')[1]
          .split(':')
          .filter((value, idx) => idx !== 2)
          .join(':'),
        open: values[key]['1. open'],
        high: values[key]['2. high'],
        low: values[key]['3. low'],
        close: values[key]['4. close'],
      };
    })
    .slice(0, 45)
    .reverse();

  return (
    <LineChartContainer>
      <LineChart width={350} height={400} data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" unit="5" />
        <XAxis dataKey="name" />
        <YAxis type="number" domain={['dataMin', 'dataMax']} />
        <Legend />
        <Line dot={false} strokeWidth={3} type="monotone" dataKey="close" stroke="#09d3ac" />
      </LineChart>
    </LineChartContainer>
  );
};

const renderValues = values => {
  const key = Object.keys(values)[0];
  const val = <span>{Number(values[key]['4. close'])}</span>;
  const text = key.split(' ')[1];
  return (
    <ValueList>
      <FirstValue key={key}>
        Current: {text} {val}
      </FirstValue>
    </ValueList>
  );
};

// <Type>{meta['1. Information']}</Type>

let i = 60;

const Content = ({ context }) => {
  const [timeToShow, setTime] = React.useState('1:00');

  const setTimer = () => {
    i -= 1;
    const current = `0:${i < 10 ? `0${i}` : i}`;
    return setTime(current);
  };

  React.useEffect(() => setInterval(setTimer, 1000), []);

  const { loading, content } = context;
  const data = content['Time Series (1min)'];
  return loading ? (
    <p>loading</p>
  ) : (
    <>
      <Type>Next snapshot in: {timeToShow}</Type>
      <Head>{content['Meta Data']['2. Symbol']} STOCK</Head>
      {renderValues(data)}
      {renderLineChart(data)}
    </>
  );
};

export default Content;
