# RealTime Analytika for Nuxt.js

[![npm](https://img.shields.io/npm/dt/nuxt-rtanalytika.svg?style=flat-square)](https://www.npmjs.com/package/nuxt-rtanalytika)
[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-rtanalytika/latest.svg?style=flat-square)](https://www.npmjs.com/package/nuxt-rtanalytika)

This is the official nuxt module for [RealTime Analytika](https://www.rtanalytika.com) platform.


Add RealTime Analytika analytics to your Nuxt.js application. This plugin automatically sends first page and route change events to RealTime Analytika.

# About RealTime Analytika
RealTime Analytika is a real time analytics platform for all your web analytical needs which gives you several features out of the box such as **Replay**, **Channels**, **Heatmaps**, **Page Flows**, **Events**, **Notes**, **Tag Clouds** etc.

Don't have account? Create one at RealTime Analytika [here.](https://www.rtanalytika.com/auth/register)

## Setup
- **Installation:**
    ```
    yarn add nuxt-rtanalytika
    ```
- **Configuration:**
    - Open `nuxt.config.js` and add `nuxt-rtanalytika` inside the **modules** like below:
        - `modules: ['nuxt-rtanalytika']`
    - Add `rtanalytika` module option and pass the `uid` like  the below:
        - `rtanalytika: { uid: 'R3J-XXXX' },`

## Module Options:
-  **`uid`** - String ***(required)*** - The rtanalytika uid
-  **`ignores`** - Array ***(optional)*** - The list of nuxt route names to ignore tracking.
    - i.e: `'ignores': ['route1', 'route2']`

## Usage
The module injects `$rtanalytika` to the context which makes it easier to access the `addEvent` method which helps us track custom events.
- i.e: `$rtanalytika.addEvent('Add to cart', 1);`