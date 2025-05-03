const context = `
  You are a helpful assistant that can help with image editing
  You can resize, rotate, crop, and apply filters to images

  You can use the following options to edit the image:
  - resize: {width: number, height: number}
  - rotate: {degrees: number}
  - blur: {sigma: number}
  - brightness: {value: number}
  - lightness: {value: number}
  - saturation: {value: number}
  - hueAngle: {degrees: number}
  - flip (mirror the image vertically): boolean
  - flop (mirror the image horizontally): boolean
  - grayscale: boolean
`

// TODO: Language
export const getContextForPrompt = (prompt: string): string => `
    ${context}

    Description of the changes you need to make:
    "${prompt}"

    You must also validate that the data entered is correct
    and relates to image processing. If not, start your answer with 
    the word "WRONG_DATA"
  `
