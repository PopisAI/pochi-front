import { useState, useEffect } from 'react'

import AgentChatMessages from './AgentChatMessages'
import { Message } from '@/types/Message'
import { getChatHistory, sendMessageToAgent } from '@/services/agent'
import { AIIcon, SendIcon } from '@/icons'

interface AgentChatProps {
  showChat?: boolean
  onInputFocus?: () => void
}

const AgentChat = ({ showChat = true, onInputFocus = undefined }: AgentChatProps) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    getHistory()
  }, [])

  const getHistory = async () => {
    const _msgs = await getChatHistory()
    setMessages(_msgs)
  }

  const sendMessage = async () => {
    if (message.trim() === '') return

    const msg: Message = {
      role: 'user',
      message: message
    }

    await sendMessageToAgent(msg)

    setMessages([...messages, msg])
    setMessage('')
  }

  return (
    <>
      <AgentChatMessages
        className={`${showChat ? 'block opacity-100' : 'hidden opacity-0'} transition-all transition-discrete`}
        messages={messages}
      />
      <label
        className="input input-lg input-bordered border-gray-300 mt-1 w-full"
        onFocus={onInputFocus}
      >
        <AIIcon />
        <input
          type="text"
          className="grow"
          placeholder="Want to by some tokens?"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button className="btn btn-circle" onClick={sendMessage}>
          <SendIcon />
        </button>
      </label>
    </>
  )
}

export default AgentChat
