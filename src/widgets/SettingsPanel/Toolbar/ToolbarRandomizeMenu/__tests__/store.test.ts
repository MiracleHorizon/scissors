import { mergeState, defaultSettings } from '../store'
import { MAX_OPERATIONS } from '../constants'

describe('ToolbarRandomizeMenu/store/mergeState', () => {
  const defaultPayload = {
    settings: defaultSettings
  }

  const createInvalidPayload = (invalidItem: unknown) => ({
    /*
     * Replacing the last item with an invalid item.
     */
    settings: [...defaultSettings.slice(0, defaultSettings.length - 1), invalidItem]
  })

  it('should return persistedState if it is valid', () => {
    const validPayload = {
      settings: [...defaultSettings]
    }
    expect(mergeState(validPayload, defaultPayload)).toStrictEqual(validPayload)
  })

  it('should return defaultSettings if persistedState is falsy', () => {
    expect(mergeState(null, defaultPayload)).toStrictEqual(defaultPayload)
    expect(mergeState(undefined, defaultPayload)).toStrictEqual(defaultPayload)
  })

  it('should return defaultSettings if in the persistedState there is no settings', () => {
    expect(mergeState({}, defaultPayload)).toStrictEqual(defaultPayload)
    expect(mergeState({ notSettings: [] }, defaultPayload)).toStrictEqual(defaultPayload)
    expect(mergeState([], defaultPayload)).toStrictEqual(defaultPayload)
  })

  it('should return defaultSettings if in the persistedState there is an invalid', () => {
    const invalidPayload1 = createInvalidPayload({
      label: 'test', // Invalid key
      checked: true
    })
    expect(mergeState(invalidPayload1, defaultPayload)).toStrictEqual(defaultPayload)

    const invalidPayload2 = createInvalidPayload({
      label: defaultSettings[defaultSettings.length - 1].label,
      checked: null // Invalid value
    })
    expect(mergeState(invalidPayload2, defaultPayload)).toStrictEqual(defaultPayload)
  })

  it(`should return defaultSettings if persisted settings total checked is greater than ${MAX_OPERATIONS}`, () => {
    const payloadWithAllChecked = {
      settings: defaultSettings.map(s => ({
        ...s,
        checked: true
      }))
    }
    expect(mergeState(payloadWithAllChecked, defaultPayload)).toStrictEqual(defaultPayload)
  })
})
