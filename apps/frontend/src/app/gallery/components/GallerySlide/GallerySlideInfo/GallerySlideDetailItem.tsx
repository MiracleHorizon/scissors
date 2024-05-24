import { Text } from '@radix-ui/themes'

/*
 * Representative expression of image processing settings.
 */

interface Props {
  label: string
  value: string | number
}

export const GallerySlideDetailItem = ({ label, value }: Props) => (
  <Text as='div'>
    {label}: <Text weight='medium'>{value}</Text>
  </Text>
)
