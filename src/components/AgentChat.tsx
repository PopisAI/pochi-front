
interface AgentChatProps {
  className?: string
}

const AgentChat = ({ className }: AgentChatProps) => {
  return (
    <div className={`${className || ''} w-full bg-base-100 rounded-lg p-2 overflow-y-auto h-max-96`}>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-accent">What kind of nonsense is this</div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-accent bg-neutral-content">It's never happened before .</div>
      </div>
    </div>
  )
}

export default AgentChat
