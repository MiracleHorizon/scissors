import { PipeTransform } from '@nestjs/common'
import { deepParseJson } from 'deep-parse-json'
import merge from 'lodash.merge'
import pick from 'lodash.pick'

interface TParseFormDataJsonOptions {
  except?: string[]
}

// https://stackoverflow.com/a/67440125/18696400
export class ParseFormDataJsonPipe implements PipeTransform {
  // eslint-disable-next-line no-unused-vars
  constructor(private options?: TParseFormDataJsonOptions) {}

  transform(value: unknown) {
    if (!this.options?.except) {
      return value
    }

    const { except } = this.options

    const serializedValue = value
    const originProperties = {}

    if (except.length > 0) {
      merge(originProperties, pick(serializedValue, ...except))
    }

    const deserializedValue = deepParseJson(value)

    return {
      ...deserializedValue,
      ...originProperties
    }
  }
}
