import { useState, useEffect } from 'react'

import AgentChatMessages from './AgentChatMessages'
import { getChatHistory } from '@/services/agent'
import { useSendMessage } from '@/hooks/useAgent'
import { AIIcon, SendIcon } from '@/icons'
import { Message } from '@/types/Message'
import useAuth from '@/hooks/useAuth'

interface AgentChatProps {
  showChat?: boolean
  onInputFocus?: () => void
}

const AgentChat = ({ showChat = true, onInputFocus = undefined }: AgentChatProps) => {
  const { isAuthenticated, user } = useAuth()
  const { agentMessage, sendMessageAgent } = useSendMessage()
  const [messages, setMessages] = useState<Message[]>([])
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    getHistory()
  }, [])

  useEffect(() => {
    if (agentMessage) {
      setMessages([...messages, agentMessage])
    }
  }, [agentMessage])

  const getHistory = async () => {
    const _msgs = await getChatHistory()
    setMessages(_msgs)
  }

  const sendMessage = async () => {
    if (message.trim() === '') return

    const msg: Message = {
      role: 'user',
      message: message,
    }

    if (user) {
      setMessages([...messages, msg])
      setMessage('')
      await sendMessageAgent(msg, user.token)
    }
  }

  return (
    <>
      <AgentChatMessages
        className={`${showChat ? 'block opacity-100' : 'hidden opacity-0'} transition-all transition-discrete`}
        isAuthenticated={isAuthenticated}
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
          onKeyDown={(e) => {
            if (e.key === 'Enter') sendMessage()
          }}
        />
        <button className="btn btn-circle" onClick={sendMessage} disabled={!isAuthenticated}>
          <SendIcon />
        </button>
      </label>
    </>
  )
}

export default AgentChat
