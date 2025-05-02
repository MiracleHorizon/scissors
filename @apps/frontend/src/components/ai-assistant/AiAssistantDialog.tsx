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

import { BotIcon } from '@scissors/react-icons/BotIcon'
import { ChevronDownIcon } from '@scissors/react-icons/ChevronDownIcon'

import { BadgeBeta } from '@lib/ui/badges/BadgeBeta'
import { useAiAssistantMutation } from './ai-assistant-mutation'
import { useLocalStorage } from '@hooks/useLocaleStorage'
import { SITE_TITLE } from '@site/config'

const MIN_PROMPT_LENGTH = 10
const MAX_PROMPT_LENGTH = 300

// TODO: Error handling
const Content = ({ onClose }: { onClose: () => void }) => {
  const [previousPrompts, setPreviousPrompts] = useLocalStorage<string[]>(
    `${SITE_TITLE}-ai-prompts`,
    []
  )
  const [prompt, setPrompt] = useState('')

  const { data: assistantResponse, mutate, loading } = useAiAssistantMutation<string[]>()

  const handleSend = async () => {
    if (prompt.length < MIN_PROMPT_LENGTH) return

    void mutate(prompt)

    setPrompt('')
    // TODO: Не сохранять значение, если оно уже есть в массиве (или удалять старое и класть по-новой)
    setPreviousPrompts(prevState => [prompt, ...prevState])
  }

  return (
    <Dialog.Content maxWidth='500px' maxHeight='80dvh'>
      <Flex align='center' justify='between' mb='4'>
        <Flex width='100%' align='center' gapX='3'>
          <Dialog.Title mb='0'>AI Assistant</Dialog.Title>

          <BadgeBeta mb='2px'>Beta</BadgeBeta>
        </Flex>

        <IconButton variant='ghost' radius='full' color='gray' onClick={onClose}>
          <svg
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M18 6 6 18' />
            <path d='m6 6 12 12' />
          </svg>
        </IconButton>
      </Flex>

      {!loading &&
        assistantResponse &&
        assistantResponse.map(message => (
          <Card mb='4' size='2'>
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
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <circle cx='12' cy='12' r='10' />
                  <polyline points='12 6 12 12 16 14' />
                </svg>
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
            <svg
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z' />
              <path d='m21.854 2.147-10.94 10.939' />
            </svg>
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
      {!open && (
        <Tooltip content='Ask the AI Assistant'>
          <Dialog.Trigger>
            <IconButton size='3' radius='full'>
              <BotIcon />
            </IconButton>
          </Dialog.Trigger>
        </Tooltip>
      )}

      {open && <Content onClose={() => setOpen(false)} />}
    </Dialog.Root>
  )
}
