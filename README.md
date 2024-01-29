<br />
<div align="center">
  <a href="https://raw.githubusercontent.com/MiracleHorizon/scissors/main/public/favicon-32x32.png">
    <img src="public/apple-touch-icon-120x120.png" alt="Logo" width=120 height=120 style="border-radius: 50%;">
  </a>

<h2 align="center">Scissors</h3>

  <p align="center">
    Your awesome application for versatile image formatting and processing!
    <br />
    <a href="https://scissors-application.vercel.app" target="_blank">Try it out</a>
  </p>
</div>

### About The Project

[![Project screenshot 1][preview-screenshot-1]][project-github]
[![Project screenshot 2][preview-screenshot-2]][project-github]

<em>[ Work in progress ]</em>

With the help of "Scissors" you can use a large number of provided options to quickly format and process images.

Some of the features available are:
* Resizing, Extending
* Rotation
* Quality control
* Grayscale, Gamma, Tint and other

Currently, the following image formats are supported:
* PNG
* JPEG
* JPG
* WEBP

### Technologies

* Next.js (App Router)
* Zustand
* React-query
* [Sharp](https://sharp.pixelplumbing.com/)

### Requirements

* Node.js v20+
* pnpm


### Run the project locally
1. Clone repository
   ```sh
   git clone https://github.com/MiracleHorizon/scissors.git
   ```
2. Install NPN packages
   ```sh
   pnpm install --frozen-lockfile
   ```
3. Run the project
   ```sh
   pnpm dev
   ```

### Production build

1. Build the project
   ```sh
   pnpm build
   ```
2. Run the project
   ```sh
   pnpm start
   ```

### Production build with Docker

1. Build the project
   ```sh
   pnpm docker:build
   ```
2. Run the project
   ```sh
   pnpm docker:start
   ```

### License

MIT © [MiracleHorizon](https://github.com/MiracleHorizon)

[project-github]: https://github.com/MiracleHorizon/scissors
[preview-screenshot-1]: readme/preview-screenshot-1.png
[preview-screenshot-2]: readme/preview-screenshot-2.png
