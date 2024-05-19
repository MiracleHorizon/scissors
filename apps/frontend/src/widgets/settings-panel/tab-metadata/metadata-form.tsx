import { Flex, Grid, Heading } from '@radix-ui/themes'
import * as Form from '@radix-ui/react-form'
import type { FC, ReactNode } from 'react'

import type { GridColumns } from '@lib/theme'
import styles from './metadata-form.module.css'

const gridColumns: GridColumns = {
  initial: '2',
  xs: '3'
} as const

export const MetadataForm: FC<Props> = ({ title, headerContent, content }) => (
  <Flex direction='column' gap='2'>
    <Flex asChild justify='between'>
      <header>
        <Heading as='h3' size='4'>
          {title}
        </Heading>

        {headerContent}
      </header>
    </Flex>

    <Grid asChild columns={gridColumns} rows='2' gap='2' className={styles.grid}>
      <Form.Root>{content}</Form.Root>
    </Grid>
  </Flex>
)

interface Props {
  title: string
  headerContent: ReactNode
  content: ReactNode
}
