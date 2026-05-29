# Weather App

A simple weather web app that lets you search any location and instantly see current conditions including temperature, precipitation, wind speed/direction, and a daily summary.

## Features

- Location search powered by Google Maps Places autocomplete
- Current temperature, precipitation probability, and wind data
- Animated weather icons via Skycons
- Express backend that proxies Dark Sky API requests to keep your API key server-side

## Tech Stack

- **Frontend:** Vanilla JS, HTML, CSS
- **Backend:** Node.js + Express
- **APIs:** [Dark Sky](https://darksky.net/dev), [Google Maps Places](https://developers.google.com/maps/documentation/places/web-service)

## Prerequisites

- Node.js
- A [Dark Sky API key](https://darksky.net/dev)
- A [Google Maps API key](https://console.cloud.google.com/) with the Places library enabled

## Setup

1. Clone the repo and install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the project root:
   ```
   DARKSKY_API_KEY=your_dark_sky_key_here
   ```

3. Replace `YOUR_API_KEY` in `public/index.html` with your Google Maps API key:
   ```html
   <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script>
   ```

4. Start the server:
   ```bash
   npm run devStart
   ```

5. Open `http://localhost:3000` in your browser.

## Usage

Type a city or address into the search box. Select a result from the autocomplete dropdown and the current weather will load automatically.
