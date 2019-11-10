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
  const [date, time] = key.split(' ');
  return (
    <ValueList>
      <p>Date: {date}</p>
      <FirstValue>
        Time: {time} {val}
      </FirstValue>
    </ValueList>
  );
};

const renderError = data => {
  return (
    <>
      <h2>The following error(s) occured</h2>
      <ul>
        {Object.keys(data).map(key => (
          <li>{data[key]}</li>
        ))}
      </ul>
    </>
  );
};

// <Type>{meta['1. Information']}</Type>

const Content = ({ context }) => {
  const { loading, content, timeToShow } = context;
  const data = content['Time Series (1min)'];
  return loading ? (
    <p>loading...</p>
  ) : !data ? (
    renderError(content)
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
