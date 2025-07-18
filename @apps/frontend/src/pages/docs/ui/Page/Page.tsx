import { DocSidebar } from '@/widgets/DocSidebar/ui/DocSidebar/DocSidebar'
import { Flex, Heading } from '@radix-ui/themes'
import { Helmet } from 'react-helmet-async'

import { SITE_TITLE } from '@/shared/seo'
import { DocList } from '@/widgets/DocList'
import styles from './Page.module.css'

export const DocumentationPage = () => (
  <>
    <Helmet>
      <title>Documentation | {SITE_TITLE}</title>
    </Helmet>

    <Flex width='100%'>
      <div className={styles.docSidebar}>
        <DocSidebar />
      </div>

      <Flex flexGrow='1' direction='column' p='6'>
        <Heading as='h1' size='8' mb='6'>
          Documentation of image processing
        </Heading>

        <DocList />
      </Flex>
    </Flex>
  </>
)
