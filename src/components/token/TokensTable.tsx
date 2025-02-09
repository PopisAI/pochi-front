import { useNavigate } from 'react-router-dom'

import { Token } from '@/types/Token'

interface TokensTableProps {
  tokens: Token[]
  className?: string
  index?: number
}
const TokensTable = ({ tokens, className, index = 1 }: TokensTableProps) => {
  const navigate = useNavigate()

  return (
    <div className={`overflow-x-auto ${className || ''}`}>
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
          {tokens.map((token: Token, i: number) => {
            const marketCap = token?.marketCap || 0

            return (
              <tr
                key={token.symbol}
                className="hover:bg-base-200"
                onClick={() => navigate(`/tokens/${token.address}`)}
              >
                <td>{i + index}</td>
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
                <td>{`${token.h24 || 0}%`}</td>
                <td>{`$${marketCap > 100000 ? `${(marketCap / 1000000).toFixed(2)}M` : marketCap > 100 ? `${(marketCap / 1000).toFixed(2)}K` : marketCap.toFixed(2)}`}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TokensTable
