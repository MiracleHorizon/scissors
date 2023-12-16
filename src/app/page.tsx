import { Box, Flex } from '@radix-ui/themes'

import { HomePageContent } from '@components/HomePageContent'

export default function HomePage() {
  return (
    <Box width='100%'>
      <Flex width='100%' align='center' direction='column'>
        <HomePageContent />
      </Flex>
    </Box>
  )
}
