import React from 'react';
import PropTypes from 'prop-types';
import { disableBodyScroll } from 'body-scroll-lock';
import { AppContext } from './app-context';
import axios from 'axios';
import moment from 'moment';

const MARKET_HOURS = [15, 22];
const BASE_TIME_TO_SHOW = 'in: 1:00';
const BASE_SEC = 60;
const MINUTE = 60000;
const SECOND = 1000;
const myStorage = window.localStorage;
console.log(myStorage);

export class AppContextProvider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      content: {},
      timeToShow: BASE_TIME_TO_SHOW,
    };
  }

  setTimer = () => {
    this.base -= 1;
    this.setState({
      timeToShow: `in: 0:${this.base < 10 ? `0${this.base}` : this.base}`,
    });
  };

  getStockInfo = (marketOpen, nextDay) => {
    const timeToShow = marketOpen ? BASE_TIME_TO_SHOW : `on ${nextDay.format('MMM DD')} from 15:00 CET`;
    this.setState({ loading: true, timeToShow });
    clearInterval(this.timerInterval);
    this.base = BASE_SEC;

    if (marketOpen) {
      myStorage.removeItem('myStock');
    }
    const localContent = JSON.parse(myStorage.getItem('myStock'));
    if (localContent) {
      const loading = false;
      this.timerInterval = marketOpen && setInterval(this.setTimer, SECOND);
      this.setState({ content: localContent, loading, timeToShow });
    } else {
      axios
        .get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=EPAM&interval=1min&apikey=3ON1I9KV93O2LPBT')
        .then(res => {
          const content = res.data;
          myStorage.setItem('myStock', JSON.stringify(content));
          const loading = false;
          this.timerInterval = marketOpen && setInterval(this.setTimer, SECOND);
          this.setState({ content, loading, timeToShow });
        })
        .catch(err => {
          clearInterval(this.timerInterval);
          const content = err;
          const loading = false;
          this.setState({ content, loading });
        });
    }
  };

  getNextDay = param => {
    return moment().add(param, 'day');
  };

  componentDidMount() {
    const currentWeekDay = moment().weekday();
    const nextDay = currentWeekDay < 5 ? this.getNextDay(1) : this.getNextDay(-currentWeekDay + 8);

    const today = new Date();
    const currentHour = Number(today.getHours());
    const marketOpen = !today.getDay() % 6 === 0 && currentHour >= MARKET_HOURS[0] && currentHour < MARKET_HOURS[1];
    this.getStockInfo(marketOpen, nextDay);
    if (marketOpen) {
      setInterval(this.getStockInfo, MINUTE);
    }
    this.targetElement = document.querySelector('#root');
    disableBodyScroll(this.targetElement);
  }

  render() {
    const { children } = this.props;
    return <AppContext.Provider value={{ ...this.state }}>{children}</AppContext.Provider>;
  }
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
