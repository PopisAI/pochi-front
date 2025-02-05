import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Layout from '@/components/Layout'
import { Token } from '@/types/Token'
import { getTokenBySymbol } from '@/services/api'

const TokenView = () => {
  const [token, setToken] = useState<Token | null>(null)
  const { tokenId } = useParams()

  useEffect(() => {
    if (tokenId) getToken(tokenId)
  }, [tokenId])

  const getToken = async (symbol: string) => {
    const _tokens = await getTokenBySymbol(symbol)
    setToken(_tokens)
  }

  return (
    <Layout>
      <div className="container mx-auto flex flex-col md:flex-row space-x-8">
        <div className='flex flex-col items-center md:items-baseline'>
          <p className="text-[12px] text-neutral-500">{token?.symbol}</p>
          <h2 className="text-2xl mb-2">{token?.name}</h2>
          <div className="card image-full w-64 shadow-md" style={{ display: 'block' }}>
            <figure>
              <img src={token?.img} alt={token?.symbol} />
            </figure>
          </div>
        </div>
        <div className="flex-1">
          <div className="card bg-neutral-800 h-83 shadow-xl mt-14">
            <div className="card-body">
              <h2 className="card-title">About {token?.symbol}</h2>
              {/** Price */}
              <div className="flex my-4">
                <p className="text-neutral-400 text-lg font-semibold w-1">Price:</p>
                <p className="text-lg">{`$${token?.price}`}</p>
              </div>
              {/** 24h */}
              <div className="flex mb-4">
                <p className="text-neutral-400 text-lg font-semibold w-1">24h:</p>
                <p className="text-lg">{`${token?.h24}`}</p>
              </div>
              {/** Market Cap */}
              <div className="flex mb-4">
                <p className="text-neutral-400 text-lg font-semibold w-1">Market cap:</p>
                <p className="text-lg">{`$${(token?.marketCap || 0)/1000000}M`}</p>
              </div>
              {/** Date Created */}
              <div className="flex mb-4">
                <p className="text-neutral-400 text-lg font-semibold w-1">Created:</p>
                <p className="text-lg">{`5d ago`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TokenView
