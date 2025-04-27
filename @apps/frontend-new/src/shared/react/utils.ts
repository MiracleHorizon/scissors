import { lazy } from 'react'

export const lazyNamedImport = ({ path, name }: { path: string; name: string }) => {
  return lazy(() =>
    import(path).then(module => ({
      default: module[name]
    }))
  )
}
