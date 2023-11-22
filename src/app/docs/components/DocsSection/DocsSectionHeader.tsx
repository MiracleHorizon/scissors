import { Box, Heading } from '@radix-ui/themes'

export function DocsSectionHeader({ title }: Props) {
  return (
    <Box asChild pl='1'>
      <article>
        <Heading size='5'>{title}</Heading>
      </article>
    </Box>
  )
}

interface Props {
  title: string
}
