import demoMessages from '@/data/messages.json'
import { Message } from '@/types/Message'

export const getChatHistory = async (): Promise<Message[]> => {
  return demoMessages.map((msg) => msg as Message)
}

export const sendMessageToAgent = async (msg: Message): Promise<void> => {
  console.log('Sending message:', msg)
}