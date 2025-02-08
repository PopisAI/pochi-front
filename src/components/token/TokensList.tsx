import { useEffect, useState } from 'react'

import { Token } from '@/types/Token'
import { getGainerTokens, getTrendingTokens } from '@/services/api'
import TokensTable from './TokensTable'

interface TokensListProps {
  rows?: number
}

const TokensList = ({ rows = 2 }: TokensListProps) => {
  const [tokens, setTokens] = useState<Token[]>([])
  const [option, setOption] = useState<string>('trending')

  useEffect(() => {
    getTokens()
  }, [option])

  const getTokens = async () => {
    const _tokens = await (option === 'top' ? getGainerTokens() : getTrendingTokens())
    setTokens(_tokens)
  }

  return (
    <>
      <div className="join mb-4">
        <input
          className="join-item btn base-400 has-checked:btn-secondary"
          type="radio"
          checked={option === 'trending'}
          onClick={() => setOption('trending')}
          name="trending"
          aria-label="Trending"
        />
        <input
          className="join-item btn bg-base-400 has-checked:btn-secondary"
          type="radio"
          checked={option === 'top'}
          onClick={() => setOption('top')}
          name="top"
          aria-label="Top"
        />
      </div>
      <div className="flex flex-row w-full justify-between">
        <TokensTable
          className="flex-1"
          tokens={tokens.length > 5 && rows > 1 ? tokens.slice(0, 5) : tokens}
        />
        {tokens.length > 5 && rows > 1 && (
          <TokensTable
            className="flex-0 invisible md:visible md:flex-1"
            tokens={tokens.slice(5, tokens.length)}
            index={6}
          />
        )}
      </div>
    </>
  )
}

export default TokensList
