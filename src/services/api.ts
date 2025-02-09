import axios from 'axios'

import demoTokens from '@/data/tokens.json'
import { Token } from '@/types/Token'

const url = `${import.meta.env.VITE_ENV === 'local' ? 'http' : 'https'}://${import.meta.env.VITE_HOST_URL}`

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max)
}

export const getTrendingTokens = async (): Promise<Token[]> => {
  return demoTokens.map((token) => token as Token)
}

export const getGainerTokens = async (): Promise<Token[]> => {
  return demoTokens.map((token) => token as Token).reverse()
}

export const getPochiTokens = async (): Promise<Token[]> => {
  const tokens = await axios
    .get(`${url}/api/tokens`, {
      headers: { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    })
    .then((res) => res.data)

  return tokens.map((token: any) => ({ ...token, img: demoTokens[getRandomInt(demoTokens.length)].img }) as Token)
}

export const getTokenBySymbol = async (tSymbol: string): Promise<Token | null> => {
  let token = null

  for (let i = 0; i < demoTokens.length; i++) {
    if (demoTokens[i].symbol === tSymbol) {
      token = demoTokens[i]
      break
    }
  }

  return token as Token
}


export const getTokenById = async (id: string): Promise<Token | null> => {
  if (id ===  null) return null
  const token = await axios
    .get(`${url}/api/tokens/${id}`, {
      headers: { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    })
    .then((res) => res.data)

    return ({ ...token, img: demoTokens[getRandomInt(demoTokens.length)].img }) as Token
}