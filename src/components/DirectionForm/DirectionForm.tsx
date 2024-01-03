import { Grid, type Responsive } from '@radix-ui/themes'
import type { PropsWithChildren } from 'react'

export function DirectionForm({ children, columns = '2' }: Props) {
  return (
    <Grid asChild columns={columns} align='center' gap='2' width='100%'>
      <form>{children}</form>
    </Grid>
  )
}

type Props = PropsWithChildren<{
  columns?: Responsive<'1' | '2'>
}>
