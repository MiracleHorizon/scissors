import { createApiURL } from '@site/config'
import { FetchException } from './exceptions/FetchException'
import { useEffect, useState } from 'react'

export const usePermissionsQuery = () => {
  const [permissions, setPermissions] = useState<Set<string>>(new Set([]))

  useEffect(() => {
    try {
      const url = createApiURL('permissions/all?environment=development')
      fetch(url).then(async response => {
        if (response.ok) {
          const permissionsJSON = await response.json()
          setPermissions(new Set(permissionsJSON))
        }
      })
    } catch (err) {
      console.log(err)

      throw new FetchException({
        cause: err
      })
    }
  }, [])

  return permissions
}
