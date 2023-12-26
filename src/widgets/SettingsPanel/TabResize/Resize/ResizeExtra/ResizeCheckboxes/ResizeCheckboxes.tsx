import { Checkbox, Flex } from '@radix-ui/themes'

export function ResizeCheckboxes() {
  return (
    <Flex mt='2' direction='column' gap='2' style={{ fontSize: '15px' }}>
      <Flex align='center' gap='2' style={{ fontSize: '15px' }}>
        <Checkbox size='3' defaultChecked /> Without Enlarging
      </Flex>
      <Flex align='center' gap='2' style={{ fontSize: '15px' }}>
        <Checkbox size='3' defaultChecked /> Without Reduction
      </Flex>
      <Flex align='center' gap='2' style={{ fontSize: '15px' }}>
        <Checkbox size='3' defaultChecked /> Flex Shrink
      </Flex>
    </Flex>
  )
}
