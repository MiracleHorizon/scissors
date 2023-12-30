<br />
<div align="center">
  <a href="https://raw.githubusercontent.com/MiracleHorizon/image-converter/main/public/favicon-32x32.png">
    <img src="public/apple-touch-icon-120x120.png" alt="Logo" width=120 height=120 style="border-radius: 50%;">
  </a>

<h2 align="center">Image Converter</h3>

  <p align="center">
    Your awesome application for versatile image formatting and processing!
    <br />
    <a href="https://image-converter-omega.vercel.app" target="_blank">Try it out</a>
  </p>
</div>

### About The Project

[![Product Screen Shot][preview-screenshot]][project-github]

<em>[ Work in progress ]</em>

With the help of "Image Converter" you can use a large number of provided options to quickly format and process images.

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

### Run the project

1. Install NPN packages
   ```sh
   pnpm install --frozen-lockfile
   ```
2. Run the project
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

[project-github]: https://github.com/MiracleHorizon/image-converter
[preview-screenshot]: public/preview-screenshot.png
