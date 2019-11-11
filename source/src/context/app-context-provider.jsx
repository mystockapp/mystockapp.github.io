import React from 'react';
import PropTypes from 'prop-types';
import { disableBodyScroll } from 'body-scroll-lock';
import { AppContext } from './app-context';
import axios from 'axios';
import moment from 'moment';

const SYMBOL = 'EPAM';
const APIKEY = '3ON1I9KV93O2LPBT';
const INTERVAL = '1min';
const FUNCTION = 'TIME_SERIES_INTRADAY';
const GET_URL = `https://www.alphavantage.co/query?function=${FUNCTION}&symbol=${SYMBOL}&interval=${INTERVAL}&apikey=${APIKEY}`;

const MARKET_HOURS = [15, 22];
const BASE_TIME_TO_SHOW = 'in: 1:00';
const BASE_SEC = 60;
const MINUTE = 60000;
const SECOND = 1000;
const ROOT_ELEMENT = '#root';
const MARKET_START = '15:00 CET (9AM PST)';
const NEXT_DAY_FORMAT = 'MMM DD';
const ONE_INCREMENT = 1;
const DATE = {
  DAY: 'day',
  WEEKEND_INCREMENT: 8,
  FRIDAY: 5,
};

const myStorage = window.localStorage;
const LOCAL_STORAGE_ID = 'mystockstore';

export const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(true);
  const [content, setContent] = React.useState({});
  const [timeToShow, setTimeToShow] = React.useState(BASE_TIME_TO_SHOW);

  const getNextDay = param => moment().add(param, DATE.DAY);

  const getNextDayFormatted = () => {
    const currentWeekDay = moment().weekday();
    const nextDay = currentWeekDay < DATE.FRIDAY ? getNextDay(ONE_INCREMENT) : getNextDay(-currentWeekDay + DATE.WEEKEND_INCREMENT);
    return nextDay.format(NEXT_DAY_FORMAT);
  };

  const getIfMarketIsOpen = () => {
    const today = new Date();
    const currentHour = Number(today.getHours());
    return !today.getDay() % 6 === 0 && currentHour >= MARKET_HOURS[0] && currentHour < MARKET_HOURS[1];
  };

  const twoDigitNumber = number => (number < 10 ? `0${number}` : number);

  let base = BASE_SEC;

  const setTimer = () => {
    base = base - ONE_INCREMENT;
    setTimeToShow(`in: 0:${twoDigitNumber(base)}`);
  };

  const handleContent = content => {
    setLoading(false);
    setContent(content);
  };

  let timerInterval;

  const handleResponse = response => {
    const { data } = response;
    myStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(data));
    timerInterval = getIfMarketIsOpen() && setInterval(setTimer, SECOND);
    handleContent(data);
  };

  const handleError = err => {
    clearInterval(timerInterval);
    handleContent(err);
  };

  const getStockInfo = () => {
    const marketOpen = getIfMarketIsOpen();
    setTimeToShow(marketOpen ? BASE_TIME_TO_SHOW : ` ${getNextDayFormatted()} from ${MARKET_START}`);

    if (marketOpen) {
      myStorage.removeItem(LOCAL_STORAGE_ID);
      base = BASE_SEC;
      setLoading(true);
      clearInterval(timerInterval);
    }

    const localContent = JSON.parse(myStorage.getItem(LOCAL_STORAGE_ID));

    if (localContent) {
      handleContent(localContent);
    } else {
      axios
        .get(GET_URL)
        .then(handleResponse)
        .catch(handleError);
    }
  };

  React.useEffect(() => {
    getStockInfo();
    setInterval(getStockInfo, MINUTE);
    disableBodyScroll(document.querySelector(ROOT_ELEMENT));
  }, []);

  return <AppContext.Provider value={{ loading, content, timeToShow }}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
