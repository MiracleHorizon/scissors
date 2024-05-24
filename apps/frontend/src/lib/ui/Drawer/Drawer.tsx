'use client'

import { Drawer } from 'vaul'
import { clsx } from 'clsx'
import type { ComponentPropsWithoutRef, FC, PropsWithChildren, ReactNode } from 'react'

import styles from './Drawer.module.css'

type Props = PropsWithChildren<
  {
    trigger: ReactNode
    withOverlay?: boolean
    contentClassName?: string
    overlayClassName?: string
    portalContainer?: HTMLElement
  } & ComponentPropsWithoutRef<typeof Drawer.Root>
>

const DrawerComponent: FC<Props> = ({
  children,
  withOverlay = true,
  contentClassName,
  overlayClassName,
  portalContainer,
  trigger,
  ...props
}) => (
  <Drawer.Root {...props}>
    <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>

    <Drawer.Portal
      container={
        portalContainer ?? (document.querySelector('[data-is-root-theme="true"]') as HTMLElement)
      }
    >
      {withOverlay && <Drawer.Overlay className={clsx(styles.overlay, overlayClassName)} />}

      <Drawer.Content className={clsx(styles.content, contentClassName)}>{children}</Drawer.Content>
    </Drawer.Portal>
  </Drawer.Root>
)

export { DrawerComponent as Drawer }
