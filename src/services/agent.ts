import axios from 'axios'

import { Message } from '@/types/Message'

const url = `${import.meta.env.VITE_ENV === 'local' ? 'http' : 'https'}://${import.meta.env.VITE_HOST_URL}`

export const getChatHistory = async (): Promise<Message[]> => {
  return []
}

export const sendMessageToAgent = async (msg: Message, token: string): Promise<Message> => {
  const ai = await axios
    .post(
      `${url}/api/user-chat`,
      { message: msg.message },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'content-type': 'application/json',
        },
      }
    )
    .then((res) => res.data)

  return { message: ai.response, role: 'bot' } as Message
}
