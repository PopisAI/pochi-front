import type { ReactNode } from 'react'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { base, baseSepolia } from 'wagmi/chains' // add baseSepolia for testing
import { Auth0Provider } from '@auth0/auth0-react'
import { http, createConfig } from 'wagmi'

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
    <Auth0Provider
      domain={'dev-n55rqj0rx4pskbzv.us.auth0.com'}
      clientId={'VGDJYrWsB3RzJp4u0EnaxtIukIjvdQ26'}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
      </WagmiProvider>
    </Auth0Provider>
  )
}

export default Providers
