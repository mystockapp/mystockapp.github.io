import React from 'react';
import PropTypes from 'prop-types';
import { AppContext } from './app-context';
import axios from 'axios';

export class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      content: {},
    };
  }

  getStockInfo = () =>
    axios
      .get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=EPAM&interval=1min&apikey=3ON1I9KV93O2LPBT')
      .then(res => {
        console.log(res.data);
        const content = res.data;
        const loading = false;
        this.setState({ content, loading });
      });

  componentDidMount() {
    this.getStockInfo();
    // setInterval(this.getStockInfo, 60000);
  }

  render() {
    const { children } = this.props;
    const { loading, content } = this.state;
    return (
      <AppContext.Provider
        value={{
          loading,
          content,
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
