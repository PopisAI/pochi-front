import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Token } from '@/types/Token'
import { getTrendingTokens } from '@/services/api'

const TokensCarousel = () => {
  const navigate = useNavigate()
  const [tokens, setTokens] = useState<Token[]>([])

  useEffect(() => {
    getTokens()
  }, [])

  const getTokens = async () => {
    const _tokens = await getTrendingTokens()
    setTokens(_tokens)
  }

  return (
    <div className="carousel carousel-center space-x-4 p-4 w-full">
      {tokens.map((token: Token) => (
        <div key={token.symbol} className="carousel-item transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102" onClick={() => navigate(`/tokens/${token.symbol}`)}>
          <div className="card glass hover">
            <figure className="h-48">
              <img src={token.img} alt="POCHI" />
            </figure>
            <div className="card-body p-4">
              <h3 className="card-title">{token.symbol}</h3>
              <p>{`Price: $${token.price}`}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TokensCarousel
