export const availableLocations = [
  {
    locationName: '臺北市',
    stationName: '臺北',
    countryName: '臺北市',
  },
  {
    locationName: '臺中市',
    stationName: '臺中',
    countryName: '臺中市',
  },
  {
    locationName: '基隆市',
    stationName: '基隆',
    countryName: '基隆市',
  },
  {
    locationName: '臺南市',
    stationName: '臺南',
    countryName: '臺南市',
  },
  {
    locationName: '高雄市',
    stationName: '高雄',
    countryName: '高雄市',
  },
  {
    locationName: '新北市',
    stationName: '新北',
    countryName: '新北市',
  },
  {
    locationName: '宜蘭縣',
    stationName: '宜蘭',
    countryName: '宜蘭縣',
  },
  {
    locationName: '桃園市',
    stationName: '新屋',
    countryName: '桃園市',
  },
  {
    locationName: '嘉義市',
    stationName: '嘉義',
    countryName: '嘉義市',
  },
  {
    locationName: '新竹縣',
    stationName: '新竹',
    countryName: '新竹縣',
  },
  {
    locationName: '苗栗縣',
    stationName: '後龍',
    countryName: '苗栗縣',
  },
  {
    locationName: '南投縣',
    stationName: '日月潭',
    countryName: '南投縣',
  },
  {
    locationName: '彰化縣',
    stationName: '彰師大',
    countryName: '彰化縣',
  },
  {
    locationName: '新竹市',
    stationName: '國三S103K',
    countryName: '新竹市',
  },
  {
    locationName: '雲林縣',
    stationName: '古坑',
    countryName: '雲林縣',
  },
  {
    locationName: '嘉義縣',
    stationName: '朴子農改',
    countryName: '嘉義縣',
  },
  {
    locationName: '屏東縣',
    stationName: '恆春',
    countryName: '屏東縣',
  },
  {
    locationName: '花蓮縣',
    stationName: '花蓮',
    countryName: '花蓮縣',
  },
  {
    locationName: '臺東縣',
    stationName: '臺東',
    countryName: '臺東縣',
  },
  {
    locationName: '金門縣',
    stationName: '金門',
    countryName: '金門縣',
  },
  {
    locationName: '澎湖縣',
    stationName: '澎湖',
    countryName: '澎湖縣',
  },
  {
    locationName: '連江縣',
    stationName: '馬祖',
    countryName: '連江縣',
  },
];

export const findLocation = (locationName) => {
  return availableLocations.find(
    (location) => location.locationName === locationName
  );
};
