import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'

import { Message } from '@/types/Message'

interface AgentChatProps {
  className?: string
  isAuthenticated?: boolean
  messages?: Message[]
}

const AgentChatMessages = ({
  className,
  isAuthenticated = false,
  messages = [],
}: AgentChatProps) => {
  const myRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    myRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }, [messages])
  return (
    <div
      className={`${className || ''} w-full bg-base-100 rounded-lg p-2 overflow-y-auto min-h-48 max-h-96`}
    >
      {isAuthenticated ? (
        messages.map((msg: Message, i: number) => (
          <div key={i} className={`chat ${msg.role === 'user' ? 'chat-start' : 'chat-end'}`}>
            <div
              className={`chat-bubble chat-bubble-accent ${msg.role === 'user' ? 'bg-neutral-content' : ''}`}
            >
              {msg.message}
            </div>
            <span ref={myRef}/>
          </div>
        ))
      ) : (
        <div className={'chat chat-end'}>
          <div className={'chat-bubble chat-bubble-accent'}>
            To talk to the agent{' '}
            <NavLink className="font-bold" to="/login">
              Login
            </NavLink>{' '}
            first.
          </div>
        </div>
      )}
    </div>
  )
}

export default AgentChatMessages
