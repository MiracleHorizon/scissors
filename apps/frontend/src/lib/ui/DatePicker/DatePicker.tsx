import { useState, type ChangeEvent } from 'react'
import { Button, Flex, Popover, Text, TextField } from '@radix-ui/themes'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import dayjs from 'dayjs'

import { CalendarIcon } from '@ui/icons/CalendarIcon'
import styles from './DatePicker.module.css'

// TODO: Checkout
const currentDate = new Date()

export function DatePicker({ value, onValueChange }: Props) {
  const [time, setTime] = useState(`${currentDate.getHours()}:${currentDate.getMinutes()}`)
  const formattedDate = getFormattedDate()

  function handleTimeChange(ev: ChangeEvent<HTMLInputElement>) {
    const time = ev.target.value

    const [hours, minutes] = time.split(':').map(str => parseInt(str, 10))
    const newDate = new Date(value.getFullYear(), value.getMonth(), value.getDate(), hours, minutes)

    setTime(time)
    handleChangeDate(newDate)
  }

  function handleChangeDate(value?: Date) {
    if (!value) return

    onValueChange(value)
  }

  function getFormattedDate() {
    const template = 'DD/MM/YYYY HH:mm'
    return dayjs(value).format(template)
  }

  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button title={formattedDate} variant='outline' color='gray' className={styles.trigger}>
          <Text className='truncate'>{formattedDate}</Text>

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

          <TextField.Root className={styles.timeInput}>
            <TextField.Input type='time' value={time} onChange={handleTimeChange} />
          </TextField.Root>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  )
}

/* eslint no-unused-vars: 0 */
interface Props {
  value: Date
  onValueChange: (value: Date) => void
}
