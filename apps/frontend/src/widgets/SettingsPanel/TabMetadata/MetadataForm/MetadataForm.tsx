import { Flex, Grid, Heading } from '@radix-ui/themes'
import * as Form from '@radix-ui/react-form'
import type { ReactNode } from 'react'

import type { GridColumns } from '@lib/theme'
import styles from './MetadataForm.module.css'

const gridColumns: GridColumns = {
  initial: '2',
  xs: '3'
} as const

interface Props {
  title: string
  headerContent: ReactNode
  content: ReactNode
}

export const MetadataForm = ({ title, headerContent, content }: Props) => (
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
