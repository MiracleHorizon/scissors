export interface ExtractAspectRatio {
  value: number
  displayValue: string
}

/*
 * Custom Cropper interfaces are needed for more precise parameterization, as well as for theeshaking.
 */
export interface CropperData {
  x: number
  y: number
  width: number
  height: number
  scaleX?: number
  scaleY?: number
}
