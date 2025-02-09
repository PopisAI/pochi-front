export interface Token {
  id?: number,
  name: string,
  symbol: string,
  address: string,
  price?: number,
  img: string,
  h24?: number,
  marketCap?: number,
  description?: string,
  agent_explanation?: string,
  tweet_related_link?: string,
}

export interface SeudoToken {
  id: number,
  name: string,
  symbol: string,
  agent_explanation: string,
  tweet_related_link: string,
  description?: string,
}