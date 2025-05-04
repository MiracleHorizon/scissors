import type { ConvertSettings } from '@scissors/sharp'

export const parseSettingsFromGpt = (gptOutput: string): Partial<ConvertSettings> => {
  const settingsArray = gptOutput.split(';')
  const settingsObject: Partial<ConvertSettings> = {}

  for (const setting of settingsArray) {
    const [key, value] = setting.split(':')

    if (key === 'flip(ymirror)') {
      settingsObject.flip = value === 'true'
    } else if (key === 'flop(xmirror)') {
      settingsObject.flop = value === 'true'
    } else if (key === 'grayscale') {
      settingsObject.grayscale = value === 'true'
    } else if (key === 'negate') {
      settingsObject.negate = {
        value: value === 'true',
        alpha: true
      }
    } else if (key === 'blur') {
      const sigma = Number(value)
      settingsObject.blur = {
        value: sigma > 0,
        sigma
      }
    } else if (key === 'rotate') {
      const angle = Number(value)
      settingsObject.rotate = {
        angle,
        background: '#000000'
      }
    } else if (key === 'brightness') {
      const brightness = Number(value)
      settingsObject.modulate = {
        brightness,
        lightness: settingsObject.modulate?.lightness ?? null,
        saturation: settingsObject.modulate?.saturation ?? null,
        hue: settingsObject.modulate?.hue ?? null
      }
    } else if (key === 'lightness') {
      const lightness = Number(value)
      settingsObject.modulate = {
        lightness,
        brightness: settingsObject.modulate?.brightness ?? null,
        saturation: settingsObject.modulate?.saturation ?? null,
        hue: settingsObject.modulate?.hue ?? null
      }
    } else if (key === 'saturation') {
      const saturation = Number(value)
      settingsObject.modulate = {
        saturation,
        hue: settingsObject.modulate?.hue ?? null,
        lightness: settingsObject.modulate?.lightness ?? null,
        brightness: settingsObject.modulate?.brightness ?? null
      }
    } else if (key === 'hue') {
      const hue = Number(value)
      settingsObject.modulate = {
        hue,
        lightness: settingsObject.modulate?.lightness ?? null,
        brightness: settingsObject.modulate?.brightness ?? null,
        saturation: settingsObject.modulate?.saturation ?? null
      }
    }
  }

  return settingsObject
}
