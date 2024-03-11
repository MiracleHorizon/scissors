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
}

export interface CropperImageData {
  left: number
  top: number
  width: number
  height: number
  naturalWidth: number
  naturalHeight: number
  aspectRatio: number
}
