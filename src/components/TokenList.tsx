import { useEffect, useState } from 'react'

import { Token } from '@/types/Token'
import { getTrendingTokens } from '@/services/api'

const TokenList = () => {
  const [tokens, setTokens] = useState<Token[]>([])

  useEffect(() => {
    getTokens()
  }, [])

  const getTokens = async () => {
    const _tokens = await getTrendingTokens()
    setTokens(_tokens)
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>24H</th>
            <th>MarketCap</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token: Token) => (
            <tr key={token.symbol}>
              <td>
                <img src={token.img} alt="POCHI" className="h-8 w-8" />
              </td>
              <td>{token.symbol}</td>
              <td>{`$${token.price}`}</td>
              <td>{`${token.h24 || '0'}%`}</td>
              <td>{`$${(token.marketCap || 0)/1000000}M`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TokenList
