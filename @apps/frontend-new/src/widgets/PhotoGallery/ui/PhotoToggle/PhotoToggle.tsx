import { useState } from 'react'
import { Flex, SegmentedControl } from '@radix-ui/themes'

export const PhotoToggle = ({
  beforeSrc,
  afterSrc,
  label
}: {
  beforeSrc: string
  afterSrc: string
  label: string
}) => {
  const [view, setView] = useState<'before' | 'after'>('before')

  return (
    <Flex
      width='100%'
      height='100%'
      align='center'
      justify='center'
      style={{ position: 'relative' }}
    >
      <div
        style={{
          width: 'max-content',
          position: 'absolute',
          left: '50%',
          top: '12px',
          transform: 'translateX(-50%)',
          zIndex: 1,
          backgroundColor: 'var(--color-background)',
          borderRadius: 'var(--radius-4)'
        }}
      >
        <SegmentedControl.Root
          value={view}
          onValueChange={value => setView(value as 'before' | 'after')}
          radius='large'
        >
          <SegmentedControl.Item value='before'>Original</SegmentedControl.Item>
          <SegmentedControl.Item value='after'>Converted</SegmentedControl.Item>
        </SegmentedControl.Root>
      </div>

      {view === 'before' && (
        <img
          src={beforeSrc}
          alt={label}
          style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'contain' }}
        />
      )}

      {view === 'after' && (
        <img
          src={afterSrc}
          alt={label}
          style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'contain' }}
        />
      )}
    </Flex>
  )
}
