import demoTokens from '@/data/tokens.json'
import { Token } from '@/types/Token'

export const getTrendingTokens = async (): Promise<Token[]> => {
  return demoTokens.map((token) => (token as Token))
}

export const getGainerTokens = async (): Promise<Token[]> => {
  return demoTokens.reverse().map((token) => (token as Token))
}
