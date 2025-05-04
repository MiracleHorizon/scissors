import { useState } from 'react'
import {
  Button,
  Dialog,
  DropdownMenu,
  Flex,
  IconButton,
  Text,
  TextArea,
  Tooltip,
  Heading,
  Card,
  Spinner
} from '@radix-ui/themes'

import { XIcon } from '@scissors/react-icons/XIcon'
import { BotIcon } from '@scissors/react-icons/BotIcon'
import { SendIcon } from '@scissors/react-icons/SendIcon'
import { ClockIcon } from '@scissors/react-icons/ClockIcon'
import { ChevronDownIcon } from '@scissors/react-icons/ChevronDownIcon'

import { BadgeBeta } from '@lib/ui/badges/BadgeBeta'
import { useAiAssistantMutation } from './ai-assistant-mutation'
import { useLocalStorage } from '@hooks/useLocaleStorage'
import { SITE_TITLE } from '@site/config'

import { useSettingsSetters } from '@stores/hooks/useSettingsSetters'

const MIN_PROMPT_LENGTH = 10
const MAX_PROMPT_LENGTH = 300
const STORAGE_KEY = `${SITE_TITLE.toLowerCase()}-ai-prompts`

// TODO: Error handling
const Content = ({ onClose }: { onClose: () => void }) => {
  const [prompt, setPrompt] = useState('')
  const [previousPrompts, setPreviousPrompts] = useLocalStorage<string[]>(STORAGE_KEY, [])
  const { setters: settingsSetters } = useSettingsSetters()

  const { data: assistantResponse, mutate, loading } = useAiAssistantMutation<string[]>()

  const handleSend = () => {
    if (prompt.length < MIN_PROMPT_LENGTH) return

    void mutate(prompt)
    setPreviousPrompts(prevState => [prompt, ...prevState.filter(p => p !== prompt)])
    setPrompt('')
  }

  const handleApply = () => {
    if (!assistantResponse) return

    for (const message of assistantResponse) {
      const [key, value] = message.split(': ')

      if (!(key in settingsSetters)) continue

      // eslint-disable-next-line
      // @ts-expect-error
      settingsSetters[key](value)
    }
  }

  return (
    <Dialog.Content maxWidth='500px' maxHeight='80dvh'>
      <Flex align='center' justify='between' mb='4'>
        <Flex width='100%' align='center' gapX='3'>
          <Dialog.Title mb='0'>AI Assistant</Dialog.Title>

          <BadgeBeta mb='2px' />
        </Flex>

        <IconButton variant='ghost' radius='full' color='gray' onClick={onClose}>
          <XIcon width='20' height='20' />
        </IconButton>
      </Flex>

      {!loading &&
        assistantResponse &&
        assistantResponse.map(message => (
          <Card mb='4' size='2' key={message}>
            <Flex direction='column'>
              <Flex justify='between' mb='2'>
                <Heading as='h4' size='3'>
                  Assistant response:
                </Heading>

                <Dialog.Close>
                  <Button
                    size='1'
                    radius='large'
                    style={{
                      alignSelf: 'flex-end'
                    }}
                    onClick={handleApply}
                  >
                    Apply
                  </Button>
                </Dialog.Close>
              </Flex>

              <Text size='2'>{message}</Text>
            </Flex>
          </Card>
        ))}

      {loading && (
        <Card mb='4' size='2'>
          <Flex align='center' direction='row' gapX='3'>
            <Spinner size='3' />
            <Text size='2'>Assistant is thinking...</Text>
          </Flex>
        </Card>
      )}

      <form
        style={{
          display: 'grid',
          gridTemplateRows: '120px max-content'
        }}
        onSubmit={handleSend}
      >
        <TextArea
          size='3'
          radius='large'
          placeholder='Type your prompt here...'
          maxLength={MAX_PROMPT_LENGTH}
          value={prompt}
          onChange={ev => setPrompt(ev.target.value)}
        />

        <Text mt='1' size='1' align='right' color='gray'>
          {prompt.length} / {MAX_PROMPT_LENGTH}
        </Text>
      </form>

      <Flex mt='4' width='100%' justify='between'>
        {previousPrompts.length > 0 && (
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button radius='large' variant='outline' color='gray'>
                <ClockIcon width='18' height='18' />
                Previous
                <ChevronDownIcon />
              </Button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content variant='soft' style={{ width: '400px' }}>
              {previousPrompts.map((prevPrompt, index) => (
                <DropdownMenu.Item
                  key={prevPrompt + index.toString()}
                  title={prevPrompt}
                  onClick={() => setPrompt(prevPrompt)}
                >
                  <Text style={{ display: 'block', width: '350px' }} truncate>
                    {prevPrompt}
                  </Text>
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        )}

        <Flex gap='2' ml='auto' justify='end'>
          <Dialog.Close>
            <Button radius='large' variant='soft' color='red'>
              Close
            </Button>
          </Dialog.Close>

          <Button
            radius='large'
            loading={loading}
            disabled={prompt.length < MIN_PROMPT_LENGTH}
            onClick={handleSend}
          >
            <SendIcon width='18' height='18' />
            Send
          </Button>
        </Flex>
      </Flex>
    </Dialog.Content>
  )
}

export const AiAssistantDialog = () => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Tooltip content='Ask the AI Assistant'>
        <Dialog.Trigger>
          <IconButton variant='ghost' radius='large' color='gray'>
            <BotIcon width='22' height='22' />
          </IconButton>
        </Dialog.Trigger>
      </Tooltip>

      {open && <Content onClose={() => setOpen(false)} />}
    </Dialog.Root>
  )
}
