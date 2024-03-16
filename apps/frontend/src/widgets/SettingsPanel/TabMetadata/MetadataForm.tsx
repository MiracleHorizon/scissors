import { Flex, Grid } from '@radix-ui/themes'
import * as Form from '@radix-ui/react-form'
import type { FC, ReactNode } from 'react'

import type { GridColumns } from '@lib/theme'
import styles from './MetadataTable.module.css'

const gridColumns: GridColumns = {
  initial: '2',
  xs: '3'
}

export const MetadataForm: FC<Props> = ({ headerContent, content }) => (
  <Flex direction='column' gap='2' className={styles.root}>
    <Flex asChild justify='between'>
      <header>{headerContent}</header>
    </Flex>

    <Grid asChild columns={gridColumns} rows='2' gap='2'>
      <Form.Root>{content}</Form.Root>
    </Grid>
  </Flex>
)

interface Props {
  headerContent: ReactNode
  content: ReactNode
}
