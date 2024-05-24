import { type ChangeEvent, useState } from 'react'
import { Button, Flex, Popover, Text, TextField } from '@radix-ui/themes'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import dayjs from 'dayjs'

import { CalendarIcon } from '@scissors/react-icons/CalendarIcon'

import styles from './DatePicker.module.css'

const getFormattedDate = (value: Date) => {
  const template = 'DD/MM/YYYY HH:mm'

  return dayjs(value).format(template)
}

export const DatePicker = ({ value, disabled, onValueChange }: Props) => {
  const currentDate = new Date()
  const formattedDate = getFormattedDate(value)
  const [time, setTime] = useState(`${currentDate.getHours()}:${currentDate.getMinutes()}`)

  const handleTimeChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const time = ev.target.value

    const [hours, minutes] = time.split(':').map(str => parseInt(str, 10))
    const newDate = new Date(value.getFullYear(), value.getMonth(), value.getDate(), hours, minutes)

    setTime(time)
    handleChangeDate(newDate)
  }

  const handleChangeDate = (value?: Date) => {
    if (!value) return

    onValueChange(value)
  }

  return (
    <Popover.Root>
      <Popover.Trigger disabled={disabled}>
        <Button title={formattedDate} variant='outline' color='gray' className={styles.trigger}>
          <Text truncate>{formattedDate}</Text>

          <CalendarIcon />
        </Button>
      </Popover.Trigger>

      <Popover.Content size='2' className={styles.content}>
        <Flex align='start' direction='column' gap='1'>
          <DayPicker
            mode='single'
            toMonth={currentDate}
            toYear={currentDate.getFullYear()}
            selected={value}
            onSelect={handleChangeDate}
            disabled={date => date > currentDate || date < new Date('1900-01-01')}
            weekStartsOn={1}
            showOutsideDays
          />

          <TextField.Root
            type='time'
            value={time}
            className={styles.timeInput}
            onChange={handleTimeChange}
          />
        </Flex>
      </Popover.Content>
    </Popover.Root>
  )
}

/* eslint no-unused-vars: 0 */
interface Props {
  value: Date
  onValueChange: (value: Date) => void
  disabled?: boolean
}
