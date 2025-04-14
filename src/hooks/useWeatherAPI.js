import dayjs from 'dayjs';
import 'dayjs/locale/zh-tw';
import { useState, useEffect, useCallback } from 'react';

const AUTHORIZATION_KEY = process.env.REACT_APP_AUTHORIZATION_KEY;

const fetchCurrentWeather = (stationName) => {
  const URL = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=${AUTHORIZATION_KEY}&StationName=${stationName}`;
  const QUERY = '&WeatherElement=WindSpeed,AirTemperature&GeoInfo=CountyName';

  return fetch(URL + QUERY)
    .then((response) => response.json())
    .then((data) => {
      console.log('data', data);
      const stationData = data.records.Station[0];
      // 將取得的資料回傳出去
      return {
        locationName: stationData.GeoInfo.CountyName,
        airTemperature: stationData.WeatherElement.AirTemperature,
        windSpeed: stationData.WeatherElement.WindSpeed,
        obsTime: stationData.ObsTime.DateTime,
      };
    });
};

const fetchWeatherForecast = (locationName) => {
  const URL_FORECAST = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${AUTHORIZATION_KEY}&locationName=${locationName}`;
  const QUERY_FORECAST = '&elementName=Wx,PoP';

  return fetch(URL_FORECAST + QUERY_FORECAST)
    .then((response) => response.json())
    .then((data) => {
      console.log('forecast data', data);
      const weatherData = data.records.location[0].weatherElement.reduce(
        (elements, item) => {
          elements[item.elementName] = item.time[0].parameter;
          return elements;
        },
        {}
      );
      // 將取得的資料回傳出去
      return {
        description: weatherData.Wx.parameterName,
        weatherCode: weatherData.Wx.parameterValue,
        pop: weatherData.PoP.parameterName,
      };
    });
};

const getMoment = (now, sunriseTimestamp, sunsetTimestamp) => {
  const nowTimeStamp = now.unix();

  // 判斷當前的 moment 並返回
  return sunriseTimestamp <= nowTimeStamp && nowTimeStamp <= sunsetTimestamp
    ? 'day'
    : 'night';
};

const fetchSunRise = (countryName) => {
  const now = dayjs();
  const date = now.format('YYYY-MM-DD');
  // 取得紀錄的 localstorage 判斷是否需要呼叫 API
  const country = localStorage.getItem('country');
  const sunriseDate = localStorage.getItem('sunriseDate');
  const srT = localStorage.getItem('sunriseTimestamp');
  const ssT = localStorage.getItem('sunsetTimestamp');
  if (
    country &&
    country === countryName &&
    sunriseDate &&
    sunriseDate === date &&
    srT &&
    ssT
  ) {
    // 根據當前儲存資料返回 moment
    return getMoment(now, srT, ssT);
  } else {
    const URL_SUNRISE = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/A-B0062-001?Authorization=${AUTHORIZATION_KEY}&CountyName=${countryName}`;
    const QUERY_SUNRISE = '&parameter=SunRiseTime,SunSetTime';

    // 獲取的地區、日期儲存 localstorage
    localStorage.setItem('country', countryName);
    localStorage.setItem('sunriseDate', date);
    return fetch(URL_SUNRISE + QUERY_SUNRISE + `&Date=${date}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('sunrise data', data);
        const { Date, SunRiseTime, SunSetTime } =
          data.records.locations.location[0].time[0];

        const sunriseTimestamp = dayjs(`${Date} ${SunRiseTime}`).unix();
        const sunsetTimestamp = dayjs(`${Date} ${SunSetTime}`).unix();
        // 日出日落資料儲存 localstorage
        localStorage.setItem('sunriseTimestamp', sunriseTimestamp);
        localStorage.setItem('sunsetTimestamp', sunsetTimestamp);

        // 返回 moment
        return getMoment(now, sunriseTimestamp, sunsetTimestamp);
      });
  }
};

const useWeatherAPI = ({ stationName, locationName, countryName }) => {
  const [weatherElement, setWeatherElement] = useState({
    locationName: '臺北市',
    description: '晴時多雲',
    airTemperature: 22.5,
    windSpeed: 23,
    pop: 10,
    obsTime: '2025-04-02T21:10:00+08:00',
    moment: 'day',
    isLoading: true,
  });

  const fetchData = useCallback(async () => {
    setWeatherElement((prevState) => ({
      ...prevState,
      isLoading: true,
    }));

    const data = await Promise.all([
      fetchCurrentWeather(stationName),
      fetchWeatherForecast(locationName),
      fetchSunRise(countryName),
    ]);
    const [currentWeather, weatherForecast, moment] = data;

    setWeatherElement({
      ...currentWeather,
      ...weatherForecast,
      moment: moment,
      isLoading: false,
    });
  }, [stationName, locationName, countryName]);

  useEffect(() => {
    console.log('execute function in useEffect');
    fetchData();
  }, [fetchData]);

  return [weatherElement, fetchData];
};

export default useWeatherAPI;
