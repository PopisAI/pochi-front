import axios from 'axios'

import demoTokens from '@/data/tokens.json'
import { Token } from '@/types/Token'

const url = `${import.meta.env.VITE_ENV === 'local' ? 'http' : 'https'}://${import.meta.env.VITE_HOST_URL}/api`
const url_moon = `https://${import.meta.env.VITE_HOST_URL_MOON}`

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max)
}

export const getMoonTokens = async (viewId: string): Promise<Token[]> => {
  const tokens = await axios
    .get(`${url_moon}/tokens/v1/${viewId}/basesepolia`, {
      headers: { 'content-type': 'application/json charset=utf-8', 'Access-Control-Allow-Origin': '*' },
    })
    .then((res) => res.data)

  return tokens.map((token: any) => ({ 
    adrress: token.baseToken.address,
    name: token.baseToken.name, 
    symbol: token.baseToken.symbol,
    marketCap: token.marketCap,
    price: token.priceUsd,
    img: token.profile?.icon,
    description: token.profile?.description,
  }) as Token)
}

export const getPochiTokens = async (): Promise<Token[]> => {
  const tokens = await axios
    .get(`${url}/tokens`, {
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
    .get(`${url}/tokens/${id}`, {
      headers: { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    })
    .then((res) => res.data)

    return ({ ...token, img: demoTokens[getRandomInt(demoTokens.length)].img }) as Token
}