import React, { useState, useEffect, useMemo } from 'react';
import useWeatherAPI from './hooks/useWeatherAPI';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import WeatherCard from './views/WeatherCard';
import WeatherSetting from './views/WeatherSetting';
import { findLocation } from './utils/helper';

const theme = {
  light: {
    backgroundColor: '#ededed',
    foregroundColor: '#f9f9f9',
    boxShadow: '0 1px 3px 0 #999999',
    titleColor: '#212121',
    temperatureColor: '#757575',
    textColor: '#828282',
  },
  dark: {
    backgroundColor: '#1F2022',
    foregroundColor: '#121416',
    boxShadow:
      '0 1px 4px 0 rgba(12, 12, 13, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.15)',
    titleColor: '#f9f9fa',
    temperatureColor: '#dddddd',
    textColor: '#cccccc',
  },
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [currentTheme, setCurrentTheme] = useState('light');
  // 定義 locationName，從 localStorage 取出先前保存的地區，若沒有保存過則給予預設值
  const storageCity = localStorage.getItem('currentCityName') || '臺北市';
  const [locationName, setLocationName] = useState(storageCity);
  // 找出每支 API 需要帶入的地區資料
  // 使用 useMemo，只要 locationName 沒有改變的情況下，即使元件重新轉譯，也不需要重新取值
  const { stationName, countryName } = useMemo(
    () => findLocation(locationName),
    [locationName]
  );
  // Custom Hook
  const [weatherElement, fetchData] = useWeatherAPI({
    stationName,
    locationName,
    countryName,
  });
  // 定義 currentPage 這個 state，預設值是 WeatherCard
  const [currentPage, setCurrentPage] = useState('WeatherCard');
  const handleCurrentPageChange = (currentPage) => {
    setCurrentPage(currentPage);
  };

  const handleCurrentLocationChange = (currentLocation) => {
    setLocationName(currentLocation);
  };

  useEffect(() => {
    setCurrentTheme(weatherElement.moment === 'day' ? 'light' : 'dark');
  }, [weatherElement.moment]); // 記得把 moment 放入 dependencies 中

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <Container>
        {currentPage === 'WeatherCard' && (
          <WeatherCard
            weatherElement={weatherElement}
            fetchData={fetchData}
            handleCurrentPageChange={handleCurrentPageChange}
          />
        )}
        {currentPage === 'WeatherSetting' && (
          <WeatherSetting
            handleCurrentPageChange={handleCurrentPageChange}
            locationName={locationName}
            handleCurrentLocationChange={handleCurrentLocationChange}
          />
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
