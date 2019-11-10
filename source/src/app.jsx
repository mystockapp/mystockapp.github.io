import React from 'react';
import { AppContainer, ValueList, Value, FirstValue, Head, Type, LineChartContainer, ValueContainer } from './app.styles';
import { AppContext, AppContextProvider } from './context';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

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
    .slice(0, 15)
    .reverse();

  console.log(data);

  return (
    <LineChartContainer>
      <LineChart width={630} height={450} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
  return (
    <ValueList>
      {Object.keys(values).map((key, idx) => {
        const first = idx === 0;
        const more = idx > 11;
        const val = <span>{Number(values[key]['4. close'])}</span>;
        const text = key.split(' ')[1];

        if (first) {
          return (
            <>
              <FirstValue key={key}>
                {text} {val}
                <p>Last 9 values</p>
              </FirstValue>
            </>
          );
        }
        if (!more) {
          return (
            <Value key={key}>
              {text} -> {val}
            </Value>
          );
        }
      })}
    </ValueList>
  );
};

const renderMeta = meta => {
  return (
    <>
      <Head>{meta['2. Symbol']} STOCK</Head>
      <Type>{meta['1. Information']}</Type>
    </>
  );
};

const renderVars = context => {
  const { loading, content } = context;
  const data = content['Time Series (1min)'];
  return loading ? (
    <p>loading</p>
  ) : (
    <>
      {renderMeta(content['Meta Data'])}
      <ValueContainer>
        {renderValues(data)}
        {renderLineChart(data)}
      </ValueContainer>
    </>
  );
};

const App = () => (
  <AppContextProvider>
    <AppContainer>
      <AppContext.Consumer>{context => <>{renderVars(context)}</>}</AppContext.Consumer>
    </AppContainer>
  </AppContextProvider>
);

export default App;
