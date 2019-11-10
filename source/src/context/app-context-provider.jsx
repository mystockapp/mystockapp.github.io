import React from 'react';
import PropTypes from 'prop-types';
import { AppContext } from './app-context';
import axios from 'axios';

export class AppContextProvider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      content: {},
      timeToShow: '1:00',
    };
  }
  base = 60;

  setTimer = () => {
    this.base -= 1;
    this.setState({
      timeToShow: `0:${this.base < 10 ? `0${this.base}` : this.base}`,
    });
  };

  getStockInfo = () => {
    const timeToShow = '1:00';
    this.setState({ loading: true });
    this.setState({ timeToShow });
    axios
      .get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=EPAM&interval=1min&apikey=3ON1I9KV93O2LPBT')
      .then(res => {
        const content = res.data;
        const loading = false;
        this.setState({ content, loading, timeToShow });
      });
  };
  componentDidMount() {
    this.getStockInfo();
    setInterval(this.setTimer, 1000);
    setInterval(this.getStockInfo, 60000);
  }

  render() {
    const { children } = this.props;
    return <AppContext.Provider value={{ ...this.state }}>{children}</AppContext.Provider>;
  }
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
