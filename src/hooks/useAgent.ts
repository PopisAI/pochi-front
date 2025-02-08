import { useState } from 'react'

import { sendMessageToAgent } from '@/services/agent'
import { Message } from '@/types/Message'

export const useSendMessage = () => {
  const [message, setMesage] = useState<Message | null>()

  const sendMessage = async (msg: Message, token: string) => {
    const response = await sendMessageToAgent(msg, token)
    setMesage(response)
  }

  return { agentMessage: message, sendMessageAgent: sendMessage }
}