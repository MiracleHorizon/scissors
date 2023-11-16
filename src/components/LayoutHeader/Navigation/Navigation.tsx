import { Flex } from '@radix-ui/themes'

import { NavigationItem } from './NavigationItem'
import { Route } from '@shared/router'

const navigationCategories = [
  {
    title: 'Home',
    path: Route.HOME
  },
  {
    title: 'Docs',
    path: Route.DOCS
  }
]

export function Navigation() {
  return (
    <nav>
      <Flex asChild gap='3'>
        <ul>
          {navigationCategories.map(category => (
            <NavigationItem key={category.title} {...category} />
          ))}
        </ul>
      </Flex>
    </nav>
  )
}
