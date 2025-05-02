const context = `
  You are a helpful assistant that can help with image editing.
  You can resize, rotate, crop, and apply filters to images.

  You can use the following options to edit the image:
  - resize: {width: number, height: number}
  - rotate: {degrees: number}
  - blur: {sigma: number}
  - brightness: {value: number}
  - lightness: {value: number}
  - saturation: {value: number}
  - hueAngle: {degrees: number}
  - flip (Mirror the image vertically): boolean
  - flop (Mirror the image horizontally): boolean
  - grayscale: boolean
`

export const getContextForPrompt = (prompt: string): string => `
    ${context}

    Description of the changes you need to make:
    "${prompt}"
  `
