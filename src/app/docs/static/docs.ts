export const rows = [
  {
    name: 'Flip',
    description: `Mirror the image vertically (up-down) about the x-axis. 
    <br />
    This always occurs before rotation, if any. This operation does not work correctly with multipage images.`,
    defaultValue: 'Disabled'
  },
  {
    name: 'Flop',
    description: `Mirror the image horizontally (left-right) about the y-axis. 
    <br />
    
    This always occurs before rotation, if any.`,
    defaultValue: 'Disabled'
  },
  {
    name: 'Negate',
    description: `Produce the "negative" of the image. 
    <br />
    Alpha - whether to negate any alpha channel.`,
    defaultValue: 'Disabled'
  },
  {
    name: 'Normalise',
    description: `Enhance output image contrast by stretching its luminance to cover a full dynamic range.
    <br />
    <br />
    Uses a histogram-based approach, taking a default range of 1% to 99% to reduce sensitivity to 
    noise at the extremes. Luminance values below the lower percentile will be underexposed by clipping to zero. 
    <br />
    <br />
    Luminance values above the upper percentile will be overexposed by clipping to the max pixel value.`,
    defaultValue: `
    Lower: 1;
    <br/> 
    <br />
    Upper: 99;`
  },
  {
    name: 'Blur',
    description: `Blur the image.
    <br/> 
    <br />
    When used without parameters, performs a fast 3x3 box blur (equivalent to a box linear filter).
    <br/> 
    <br />
    When a <b><code>sigma</code></b> is provided, performs a slower, more accurate Gaussian blur.
    `,
    defaultValue: 'Disabled'
  }
]
