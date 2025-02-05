import { useEffect, useState } from 'react'

import { Token } from '@/types/Token'
import { getTrendingTokens } from '@/services/api'
import TokensTable from './TokensTable'

interface TokensListProps {
  rows?: number
}

const TokensList = ({ rows = 2 }: TokensListProps) => {
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
        <input className="join-item btn checked:btn-secondary" type="radio" defaultChecked name="options" aria-label="Trending" />
        <input className="join-item btn" type="radio" name="options" aria-label="Top" />
      </div>
      <div className="flex flex-row w-full justify-between">
        <TokensTable className="flex-1" tokens={tokens.length > 5 && rows > 1 ? tokens.slice(0,5) : tokens} />
        {(tokens.length > 5 && rows > 1) && <TokensTable className="flex-1" tokens={tokens.slice(5,tokens.length)} index={6} />}
      </div>
    </>
  )
}

export default TokensList
