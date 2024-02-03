<br />
<div align="center">
  <a href="https://raw.githubusercontent.com/MiracleHorizon/scissors/main/public/favicon-32x32.png">
    <img src="public/android-chrome-192x192.png" alt="Logo" width=128 height=128>
  </a>

  <h1 style="font-size: 32px; margin-top: 0">Scissors</h1>

  <p>
    Your awesome application for versatile image formatting and processing!
    <br />
    <a href="https://scissors-application.vercel.app" rel="noreferrer" target="_blank">Try it out</a>
  </p>
</div>

<h2 align="center" style="font-size: 24px;">About The Project</h2>

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
[preview-screenshot-1]: social/og-image-share-light.png
[preview-screenshot-2]: social/og-image-share-dark.png
