import { useRef, useState, useEffect, RefObject } from 'react'

import AgentChatMessages from './AgentChatMessages'
import { Message } from '@/types/Message'
import { getChatHistory } from '@/services/agent'
import AgentChat from './AgentChat'

const useOutsideClick = (ref: RefObject<HTMLInputElement>, onOut: Function) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOut()
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}

const AgentWidget = () => {
  const [showChat, setShowChat] = useState(false)
  const mainRef = useRef<HTMLInputElement>(null)

  const hideChat = () => {
    setShowChat(false)
  }

  useOutsideClick(mainRef, hideChat)

  const handleOnFocus = () => {
    console.log('focus')
    setShowChat(true)
  }

  return (
    <div ref={mainRef} className="fixed pointer-events-auto bottom-4 left-1/2 -translate-x-1/2">
      <div className="bg-neutral-content w-[80vw] md:w-[50vw] flex items-center justify-between p-1 rounded-lg shadow-lg flex-col">
        <AgentChat showChat={showChat} onInputFocus={handleOnFocus} />
      </div>
    </div>
  )
}

export default AgentWidget
