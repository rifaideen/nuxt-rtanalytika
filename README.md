# RealTime Analytika for Nuxt.js

[![npm](https://img.shields.io/npm/dt/nuxt-rtanalytika.svg?style=flat-square)](https://www.npmjs.com/package/nuxt-rtanalytika)
[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-rtanalytika/latest.svg?style=flat-square)](https://www.npmjs.com/package/nuxt-rtanalytika)

Add RealTime Analytika analytics to your Nuxt.js application. This plugin automatically sends first page and route change events to RealTime Analytika.

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
-  **`uid`** ***(required)*** - The rtanalytika uid