import type { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { http, createConfig, WagmiProvider } from 'wagmi'
import { base, baseSepolia } from 'wagmi/chains'

import { ContextProvider } from '@/context'

const queryClient = new QueryClient()

export const config = createConfig({
  chains: [base, baseSepolia],
  transports: {
    [base.id]: http(),
    [baseSepolia.id]: http(),
  },
})

const Providers = (props: { children: ReactNode }) => {
  return (
    <ContextProvider>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
      </WagmiProvider>
    </ContextProvider>
  )
}

export default Providers
