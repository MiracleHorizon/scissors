import { useState } from 'react'
import { Button, Dialog, Flex, IconButton, Text, TextArea, Tooltip } from '@radix-ui/themes'

import { BotIcon } from '@scissors/react-icons/BotIcon'

import { SITE_TITLE } from '@site/config'
import { useAiAssistantMutation } from './ai-assistant-mutation'
import { BadgeBeta } from '@lib/ui/badges/BadgeBeta'

const MIN_PROMPT_LENGTH = 10
const MAX_PROMPT_LENGTH = 250

// TODO: Previous requests
export const AiAssistant = () => {
  const [open, setOpen] = useState(false)
  const [prompt, setPrompt] = useState('')

  const { data, mutate } = useAiAssistantMutation<string[]>()

  const handleSend = async () => {
    if (prompt.length < MIN_PROMPT_LENGTH) return

    void mutate(prompt)
  }

  const handleOpenChange = (value: boolean) => {
    setOpen(value)
    setPrompt('')
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      {!open && (
        <Tooltip content='Ask the AI Assistant'>
          <Dialog.Trigger>
            <IconButton size='3' radius='full'>
              <BotIcon />
            </IconButton>
          </Dialog.Trigger>
        </Tooltip>
      )}

      <Dialog.Content maxWidth='450px' maxHeight='400px'>
        <Flex width='100%' justify='center' align='center' gapX='3' mb='4'>
          <Dialog.Title align='center' mb='0'>
            {SITE_TITLE} AI Assistant
          </Dialog.Title>

          <BadgeBeta mb='2px'>Beta</BadgeBeta>
        </Flex>

        <form
          style={{
            display: 'grid',
            gridTemplateRows: '150px max-content'
          }}
          onSubmit={handleSend}
        >
          <TextArea
            radius='large'
            size='3'
            placeholder='Enter your prompt'
            maxLength={MAX_PROMPT_LENGTH}
            value={prompt}
            onChange={ev => setPrompt(ev.target.value)}
          />

          <Text mt='1' size='1' align='right' color='gray'>
            {prompt.length} / {MAX_PROMPT_LENGTH}
          </Text>
        </form>

        {data && <p>{JSON.stringify(data)}</p>}

        <Flex gap='3' mt='4' justify='end'>
          <Dialog.Close>
            <Button variant='soft' color='gray' radius='large'>
              Cancel
            </Button>
          </Dialog.Close>

          <Button radius='large' disabled={prompt.length < MIN_PROMPT_LENGTH} onClick={handleSend}>
            Send
          </Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}
