import { Message } from '@/types/Message'

interface AgentChatProps {
  className?: string
  messages?: Message[]
}

const AgentChatMessages = ({ className, messages = [] }: AgentChatProps) => {
  return (
    <div
      className={`${className || ''} w-full bg-base-100 rounded-lg p-2 overflow-y-auto max-h-96`}
    >
      {messages.map((msg: Message, i: number) => (
        <div key={i} className={`chat ${msg.role === 'user' ? 'chat-start' : 'chat-end'}`}>
          <div
            className={`chat-bubble chat-bubble-accent ${msg.role === 'user' ? 'bg-neutral-content' : ''}`}
          >
            {msg.message}
          </div>
        </div>
      ))}
    </div>
  )
}

export default AgentChatMessages
