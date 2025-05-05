import { Badge, Box, Flex } from '@radix-ui/themes'

export const PhotoSplit = ({
  beforeSrc,
  afterSrc,
  label
}: {
  beforeSrc: string
  afterSrc: string
  label: string
}) => (
  <Flex justify='center' align='center' width='100%' gapX='4'>
    <Box width='50%' height='100%' style={{ position: 'relative' }}>
      <img
        src={beforeSrc}
        alt={label}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
      />

      <Badge
        size='3'
        radius='large'
        color='gray'
        style={{ position: 'absolute', bottom: 0, left: 0 }}
      >
        Original
      </Badge>
    </Box>

    <Box width='50%' height='100%' style={{ position: 'relative' }}>
      <img
        src={afterSrc}
        alt={label}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
      />

      <Badge
        size='3'
        radius='large'
        color='gray'
        style={{ position: 'absolute', bottom: 0, left: 0 }}
      >
        Converted
      </Badge>
    </Box>
  </Flex>
)
