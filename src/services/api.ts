import demoTokens from '@/data/tokens.json'
import { Token } from '@/types/Token'

export const getTrendingTokens = async (): Promise<Token[]> => {
  return demoTokens.map((token) => token as Token)
}

export const getGainerTokens = async (): Promise<Token[]> => {
  return demoTokens.map((token) => token as Token).reverse()
}

export const getTokenBySymbol = async (tSymbol: string): Promise<Token | null > => {
  let token = null

  for (let i = 0; i < demoTokens.length; i++) {
    if (demoTokens[i].symbol === tSymbol) {
      token = demoTokens[i]
      break
    }
  }

  return token as Token
}
