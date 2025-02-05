import demoMessages from '@/data/messages.json'
import { Message } from '@/types/Message'

export const getchatHistory = async (): Promise<Message[]> => {
  return demoMessages.map((msg) => msg as Message)
}