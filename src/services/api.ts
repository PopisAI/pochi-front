import axios from 'axios'

import demoTokens from '@/data/tokens.json'
import { SeudoToken, Token } from '@/types/Token'

const url = `${import.meta.env.VITE_ENV === 'local' ? 'http' : 'https'}://${import.meta.env.VITE_HOST_URL}/api`
const url_moon = `https://${import.meta.env.VITE_HOST_URL_MOON}`

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max)
}

const getRandomImg = () => {
  return demoTokens[getRandomInt(demoTokens.length)].img
}

export const getMoonTokens = async (viewId: string): Promise<Token[]> => {
  const tokens = await axios
    .get(`${url_moon}/tokens/v1/${viewId}/basesepolia`, {
      headers: { 'content-type': 'application/json charset=utf-8', 'Access-Control-Allow-Origin': '*' },
    })
    .then((res) => res.data)

  const pochis = await getPochiTokensAddress()

  return tokens.map((token: any) => ({ 
    address: token.baseToken.address,
    name: token.baseToken.name, 
    symbol: token.baseToken.symbol,
    marketCap: token.marketCap,
    price: token.priceUsd,
    img: token.profile?.icon || getRandomImg(),
    description: token.profile?.description,
    id: token.baseToken.address in pochis ? pochis[token.baseToken.address] as number : null,
  }) as Token)
}

export const getPochiTokens = async (): Promise<Token[]> => {
  const tokens = await axios
    .get(`${url}/tokens`, {
      headers: { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    })
    .then((res) => res.data)

  return tokens.map((token: any) => ({ ...token, address: token.contract_address, img: getRandomImg(), }) as Token)
}
const getPochiTokensAddress = async (): Promise<any> => {
  const tokens = await axios
    .get(`${url}/tokens`, {
      headers: { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    })
    .then((res) => res.data)

  let _pochis: any = {}
  for (const token of tokens) {
    _pochis[token.contract_address] = token.id
  }

  return _pochis
}

export const getTokenByAddress = async (address: string, id: string | null): Promise<Token | null> => {
  const token = await axios
    .get(`${url_moon}/token/v1/basesepolia/${address}:moon`, {
      headers: { 'content-type': 'application/json charset=utf-8', 'Access-Control-Allow-Origin': '*' },
    })
    .then((res) => res.data)

  let _token = null
  if(id) {
    _token = await getTokenById(id)
  }

  return { 
    address: token.baseToken.address,
    name: token.baseToken.name, 
    symbol: token.baseToken.symbol,
    marketCap: token.marketCap,
    price: token.priceUsd,
    img: token.profile?.icon || getRandomImg(),
    description: token.profile?.description,
    id: _token?.id || null,
    agent_explanation: _token?.agent_explanation || null,
    tweet_related_link: _token?.tweet_related_link ? `https://x.com${_token.tweet_related_link}` :  null,
  } as Token
}

const getTokenById = async (id: string): Promise<SeudoToken | null> => {
  if (id ===  null) return null
  const token = await axios
    .get(`${url}/tokens/${id}`, {
      headers: { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    })
    .then((res) => res.data)

    return token as SeudoToken
}