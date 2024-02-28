import { ValidateIf, ValidationOptions } from 'class-validator'

import { allowNullCondition } from '../helpers'

export const IsNullable = (validationOptions?: ValidationOptions): PropertyDecorator =>
  ValidateIf(allowNullCondition, validationOptions)
