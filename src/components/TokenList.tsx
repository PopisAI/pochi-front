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
    <>
      <div className="join mb-4">
        <input className="join-item btn" type="radio" checked name="options" aria-label="Trending" />
        <input className="join-item btn" type="radio" name="options" aria-label="Top" />
      </div>
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
            {tokens.map((token: Token, i: number) => (
              <tr key={token.symbol} className="hover">
                <td>{i + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={token.img} alt={token.symbol} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{token.name}</div>
                      <div className="text-sm opacity-50">{token.symbol}</div>
                    </div>
                  </div>
                </td>
                <td>{`$${token.price}`}</td>
                <td>{`${token.h24 || '0'}%`}</td>
                <td>{`$${(token.marketCap || 0) / 1000000}M`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TokenList
