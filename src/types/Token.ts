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
}