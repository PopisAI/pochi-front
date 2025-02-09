export interface Token {
  id?: number,
  name: string,
  symbol: string,
  price?: number,
  img: string,
  h24?: number,
  marketCap?: number,
  contract_address?: string,
  description?: string,
}