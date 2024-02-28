import { ValidateIf, ValidationOptions } from 'class-validator'

import { allowZeroCondition } from '../helpers'

export const IsZero = (validationOptions?: ValidationOptions): PropertyDecorator =>
  ValidateIf(allowZeroCondition, validationOptions)
