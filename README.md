# <img alt="Logo" src="https://raw.githubusercontent.com/YPINPIN/realtime-weather-test/main/public/icon@512.png" height="28" /> 臺灣好天氣 App 練習專案

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Create React App](https://img.shields.io/badge/Create%20React%20App-Deprecated-red?logo=createreactapp&logoColor=white)](https://create-react-app.dev/)
[![Normalize.css](https://img.shields.io/badge/Normalize.css-8.x-E3695F?logo=normalizedotcss&logoColor=white)](https://necolas.github.io/normalize.css/)
[![Deploy](https://img.shields.io/badge/GitHub%20Pages-deployed-3FB950?logo=github&logoColor=white)](https://ypinpin.github.io/realtime-weather-test/)
[![Last Commit](https://img.shields.io/github/last-commit/YPINPIN/realtime-weather-test)](https://github.com/YPINPIN/realtime-weather-test/commits/main)

主要根據 [從 Hooks 開始，讓你的網頁 React 起來](https://pjchender.dev/react-bootcamp/) 的 [臺灣好天氣 App 專案](https://pjchender.dev/react-bootcamp/docs/book/ch4/4-1) 教學實作的 React 專案 (使用 CRA 搭配 React 18 版本實作)。

由於 Create React App 已正式被棄用，**此專案主要是為練習撰寫 React 及串接第三方 API 相關功能**。

> [!CAUTION]
>
> ## Deprecated
>
> Today(February 14, 2025), we’re deprecating [Create React App](https://create-react-app.dev/) for new apps, and encouraging existing apps to migrate to a [framework](https://react.dev/learn/creating-a-react-app). We’re also providing docs for when a framework isn’t a good fit for your project, or you prefer to start by [building a framework](https://react.dev/learn/building-a-react-framework). —— [Sunsetting Create React App](https://react.dev/blog/2025/02/14/sunsetting-create-react-app)

---

## ✨ 功能特色

- 根據縣市地區使用【氣象資料開放平臺】API 查詢即時天氣資料。
- 顯示氣溫、風速、降雨機率、天氣描述與圖示。
- PWA 支援，可安裝成桌面/手機 App
- 響應式設計，支援桌機與行動裝置

---

## 📝 實作筆記

[ 📖 臺灣好天氣 App 專案實作筆記](https://github.com/YPINPIN/react-bootcamp-note?tab=readme-ov-file#%E8%87%BA%E7%81%A3%E5%A5%BD%E5%A4%A9%E6%B0%A3-app-%E5%B0%88%E6%A1%88%E5%BB%BA%E7%AB%8B%E5%9C%96%E7%A4%BA%E6%AA%94%E6%A1%88%E4%B8%8B%E8%BC%89)

---

## 🎮 Demo

[💻 **線上 Demo**](https://ypinpin.github.io/realtime-weather-test/)

![demo-01.gif](./demo/demo-01.gif)

也可以在手機上開啟頁面並安裝 App：

- Github Pages QRcode

  ![demo-qrcode](./demo/demo.PNG)

- Demo (Android)

  ![demo-02.gif](./demo/demo-02.gif)

- Demo (iOS)

  ![demo-03.gif](./demo/demo-03.gif)

---

## 🛠️ 開發與安裝

1. **下載專案**

   ```bash
   git clone https://github.com/YPINPIN/realtime-weather-test.git
   cd realtime-weather-test
   ```

2. **安裝依賴**

   ```bash
   npm install
   ```

3. **啟動開發伺服器**

   ```bash
   npm start
   ```

4. **打包建置**

   ```bash
   npm run build
   ```
