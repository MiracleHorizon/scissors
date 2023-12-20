import { IconButton, type MarginProps } from '@radix-ui/themes'
import { Cross2Icon } from '@radix-ui/react-icons'

export function ButtonClear(props: Props) {
  return (
    <IconButton size='1' color='gray' variant='ghost' radius='full' {...props}>
      <Cross2Icon />
    </IconButton>
  )
}

interface Props extends MarginProps {
  onClick: VoidFunction
}
