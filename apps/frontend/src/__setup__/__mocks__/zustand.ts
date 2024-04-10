// https://docs.pmnd.rs/zustand/guides/testing#vitest

import { act } from '@testing-library/react'
import * as zustand from 'zustand'

const { create: actualCreate, createStore: actualCreateStore } =
  await vi.importActual<typeof zustand>('zustand')

export const storeResetFns = new Set<() => void>()

const createUncurried = <T>(stateCreator: zustand.StateCreator<T>) => {
  const store = actualCreate(stateCreator)

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const initialState = store.getInitialState()
  storeResetFns.add(() => {
    store.setState(initialState, true)
  })
  return store
}

export const create = (<T>(stateCreator: zustand.StateCreator<T>) =>
  typeof stateCreator === 'function'
    ? createUncurried(stateCreator)
    : createUncurried) as typeof zustand.create

const createStoreUncurried = <T>(stateCreator: zustand.StateCreator<T>) => {
  const store = actualCreateStore(stateCreator)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const initialState = store.getInitialState()
  storeResetFns.add(() => {
    store.setState(initialState, true)
  })
  return store
}

export const createStore = (<T>(stateCreator: zustand.StateCreator<T>) =>
  typeof stateCreator === 'function'
    ? createStoreUncurried(stateCreator)
    : createStoreUncurried) as typeof zustand.createStore

afterEach(() => {
  act(() => {
    storeResetFns.forEach(resetFn => {
      resetFn()
    })
  })
})
