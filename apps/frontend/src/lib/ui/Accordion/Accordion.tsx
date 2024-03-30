import * as Accordion from '@radix-ui/react-accordion'
import { clsx } from 'clsx'
import type { ComponentPropsWithoutRef, FC, HTMLAttributes } from 'react'

import { ChevronDownIcon } from '@scissors/react-icons/ChevronDownIcon'

import styles from './Accordion.module.css'

const AccordionRoot: FC<ComponentPropsWithoutRef<typeof Accordion.Root>> = ({
  children,
  className,
  ...props
}) => (
  <Accordion.Root className={clsx(styles.root, className)} {...props}>
    {children}
  </Accordion.Root>
)
AccordionRoot.displayName = 'AccordionRoot'

const AccordionHeader: FC<ComponentPropsWithoutRef<typeof Accordion.Header>> = ({
  children,
  className,
  ...props
}) => (
  <Accordion.Header className={clsx(styles.header, className)} {...props}>
    {children}
  </Accordion.Header>
)
AccordionHeader.displayName = 'AccordionHeader'

const AccordionItem: FC<ComponentPropsWithoutRef<typeof Accordion.Item>> = ({
  children,
  className,
  ...props
}) => (
  <Accordion.Item className={clsx(styles.item, className)} {...props}>
    {children}
  </Accordion.Item>
)
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger: FC<ComponentPropsWithoutRef<typeof Accordion.Trigger>> = ({
  children,
  className,
  ...props
}) => (
  <Accordion.Trigger className={clsx(styles.trigger, className)} {...props}>
    {children}
  </Accordion.Trigger>
)
AccordionTrigger.displayName = 'AccordionTrigger'

const AccordionContent: FC<ComponentPropsWithoutRef<typeof Accordion.Content>> = ({
  children,
  className,
  ...props
}) => (
  <Accordion.Content className={clsx(styles.content, className)} {...props}>
    {children}
  </Accordion.Content>
)
AccordionContent.displayName = 'AccordionContent'

const AccordionChevron: FC<HTMLAttributes<HTMLOrSVGElement>> = ({ className, ...props }) => (
  <ChevronDownIcon width={22} height={22} className={clsx(styles.chevron, className)} {...props} />
)

export {
  AccordionRoot as Root,
  AccordionHeader as Header,
  AccordionItem as Item,
  AccordionTrigger as Trigger,
  AccordionContent as Content,
  AccordionChevron as Chevron
}
