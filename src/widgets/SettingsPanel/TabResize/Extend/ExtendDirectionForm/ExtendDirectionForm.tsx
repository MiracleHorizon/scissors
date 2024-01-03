'use client'

import { useMemo } from 'react'

import { ExtendDirectionFormNumber } from './ExtendDirectionFormNumber'
import { ExtendDirectionFormAxis } from './ExtendDirectionFormAxis'
import { ExtendDirectionFormSeparated } from './ExtendDirectionFormSeparated'
import { DirectionModel, useExtendStore } from '@stores/extend'

const variants = {
  [DirectionModel.NUMBER]: ExtendDirectionFormNumber,
  [DirectionModel.AXIS]: ExtendDirectionFormAxis,
  [DirectionModel.SEPARATED]: ExtendDirectionFormSeparated
}

// TODO: Dynamic imports?
export function ExtendDirectionForm() {
  const directionModel = useExtendStore(state => state.directionModel)

  const Component = useMemo(() => variants[directionModel], [directionModel])

  return <Component />
}
