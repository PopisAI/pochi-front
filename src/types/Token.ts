export interface Token {
  id?: number,
  name: string,
  symbol: string,
  price?: number,
  img: string,
  h24?: string,
  marketCap?: number,
  contract_address?: string,
  description?: string,
}