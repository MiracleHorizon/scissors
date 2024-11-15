import * as Accordion from '@radix-ui/react-accordion'
import { clsx } from 'clsx'
import type { ComponentPropsWithoutRef, HTMLAttributes } from 'react'

import { ChevronDownIcon } from '@scissors/react-icons/ChevronDownIcon'

import styles from './Accordion.module.css'

const AccordionRoot = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<typeof Accordion.Root>) => (
  <Accordion.Root className={clsx(styles.root, className)} {...props}>
    {children}
  </Accordion.Root>
)
AccordionRoot.displayName = 'AccordionRoot'

const AccordionHeader = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<typeof Accordion.Header>) => (
  <Accordion.Header className={clsx(styles.header, className)} {...props}>
    {children}
  </Accordion.Header>
)
AccordionHeader.displayName = 'AccordionHeader'

const AccordionItem = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<typeof Accordion.Item>) => (
  <Accordion.Item className={clsx(styles.item, className)} {...props}>
    {children}
  </Accordion.Item>
)
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<typeof Accordion.Trigger>) => (
  <Accordion.Trigger className={clsx(styles.trigger, className)} {...props}>
    {children}
  </Accordion.Trigger>
)
AccordionTrigger.displayName = 'AccordionTrigger'

const AccordionContent = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<typeof Accordion.Content>) => (
  <Accordion.Content className={clsx(styles.content, className)} {...props}>
    {children}
  </Accordion.Content>
)
AccordionContent.displayName = 'AccordionContent'

const AccordionChevron = ({ className, ...props }: HTMLAttributes<HTMLOrSVGElement>) => (
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
