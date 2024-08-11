export const scaleCanvas = (canvas: HTMLCanvasElement, parent: HTMLDivElement): void => {
  const width = parent.offsetWidth
  const height = parent.offsetHeight

  canvas.style.width = width + 'px'
  canvas.style.height = height + 'px'

  const dpi = window.devicePixelRatio
  canvas.width = width * dpi
  canvas.height = height * dpi

  canvas.getContext('2d')?.scale(dpi, dpi)
}
