import { useMemo } from 'react'
import { Flex, Button, Text } from '@radix-ui/themes'

// import { SearchIcon } from '@scissors/react-icons/search'

import { NavigationItem } from './NavigationItem/NavigationItem'
import styles from './Navigation.module.css'

const categories: { title: string; value: string }[] = [
  { title: 'Common', value: 'common' },
  { title: 'Rotation', value: 'rotation' },
  { title: 'Modulation', value: 'modulation' },
  { title: 'Colorization', value: 'colorization' },
  { title: 'Advanced', value: 'advanced' }
] as const

export const Navigation = ({
  search,
  setSearch
}: {
  search: string
  /* eslint no-unused-vars: 0 */
  setSearch: (search: string) => void
}) => {
  const clearSearch = () => setSearch('')

  const filteredCategories = useMemo(() => {
    if (!search) {
      return categories
    }

    return categories.filter(category =>
      category.title.toLowerCase().includes(search.toLowerCase())
    )
  }, [search])

  return (
    <nav>
      {filteredCategories.length > 0 ? (
        <Flex asChild direction='column' gap='2'>
          <ul>
            {filteredCategories.map(category => (
              <NavigationItem key={category.value} {...category} />
            ))}
          </ul>
        </Flex>
      ) : (
        <Flex justify='center' align='center' direction='column' height='100%' mt='6'>
          <Flex
            width='48px'
            height='48px'
            align='center'
            justify='center'
            mb='4'
            className={styles.emptyStateBubble}
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='m21 21-4.34-4.34' />
              <circle cx='11' cy='11' r='8' />
            </svg>
          </Flex>

          <Text size='2' weight='medium' align='center' mb='2'>
            No results found
          </Text>

          <Text as='p' size='2' color='gray' align='center'>
            No sections found for the query "{search}"
          </Text>

          <Button mt='5' size='2' color='gray' radius='large' variant='soft' onClick={clearSearch}>
            Clear search
          </Button>
        </Flex>
      )}
    </nav>
  )
}
