import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import Layout from '@/components/Layout'
import { Token } from '@/types/Token'
import { getTokenByAddress } from '@/services/api'
import FlagGenerated from '@/components/FlagGenerated'

const TokenView = () => {
  const [token, setToken] = useState<Token | null>(null)
  const [searchParams] = useSearchParams()
  const { tokenSymbol } = useParams()

  useEffect(() => {
    if (tokenSymbol) {
      const tokenId = searchParams.get('id')
      getToken(tokenId, tokenSymbol)
    }
  }, [tokenSymbol])

  const getToken = async (id: string | null, address: string) => {
    const _tokens = await getTokenByAddress(address, id)

    setToken(_tokens)
  }

  const marketCap = token?.marketCap || 0
  return (
    <Layout>
      <div className="container mx-auto flex flex-col md:flex-row space-x-8">
        <div className="flex flex-col items-center md:items-baseline">
          <p className="text-[12px] text-neutral-500">{token?.symbol}</p>
          <h2 className="text-2xl mb-2">{token?.name}</h2>
          <div className="card image-full w-64 shadow-md" style={{ display: 'block' }}>
            <figure>
              <img className='min-h-60' src={token?.img} alt={token?.symbol} />
            </figure>
          </div>
        </div>
        <div className="flex-1">
          <div className="card bg-neutral-800 min-h-83 shadow-xl mt-14">
            <div className="card-body">
              <h2 className="card-title">
                About {token?.symbol}{' '}
                {token?.id && <FlagGenerated />}
              </h2>
              {/** Price */}
              <div className="flex my-4">
                <p className="flex-1 text-neutral-400 text-lg font-semibold w-1">Price:</p>
                <p className="flex-3 text-lg">{`$${token?.price || '...'}`}</p>
              </div>
              {/** 24h */}
              <div className="flex mb-4">
                <p className="flex-1 text-neutral-400 text-lg font-semibold w-1">24h:</p>
                <p className="flex-3 text-lg">{`${token?.h24 || 0}%`}</p>
              </div>
              {/** Market Cap */}
              <div className="flex mb-4">
                <p className="flex-1 text-neutral-400 text-lg font-semibold w-1">Market cap:</p>
                <p className="flex-3 text-lg">{`$${marketCap > 100000 ? `${(marketCap / 1000000).toFixed(4)}M` : marketCap > 100 ? `${(marketCap / 1000).toFixed(4)}K` : marketCap.toFixed(4)}`}</p>
              </div>
              {/** Date Created */}
              <div className="flex mb-4">
                <p className="flex-1 text-neutral-400 text-lg font-semibold w-1">Created:</p>
                <p className="flex-3 text-lg">{`5d ago`}</p>
              </div>
              {/** Address */}
              <div className="flex mb-4">
                <p className="flex-1 text-neutral-400 text-lg font-semibold w-1">Address:</p>
                <p className="flex-3 truncate text-lg">{token?.address}</p>
              </div>
              {/** Address */}
              {token?.tweet_related_link && <div className="flex mb-4">
                <p className="flex-1 text-neutral-400 text-ellipsis text-lg font-semibold w-1">Original Tweet:</p>
                <a className="flex-3 truncate text-lg" href={token?.tweet_related_link} target="_blank">{token?.tweet_related_link}</a>
              </div>}
              {token?.agent_explanation && <div className="flex mb-4">
                <p className="flex-1 text-neutral-400 text-lg font-semibold">Explanation:</p>
                <p className="flex-3 text-ellipsis text-lg">{token?.agent_explanation}</p>
              </div>}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TokenView
