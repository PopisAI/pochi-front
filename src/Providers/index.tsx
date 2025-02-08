import type { ReactNode } from 'react'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { base, baseSepolia } from 'wagmi/chains'
import { Auth0Provider } from '@auth0/auth0-react'
import { http, createConfig } from 'wagmi'

const queryClient = new QueryClient()

const authDomain = import.meta.env.VITE_AUTH_DOMAIN
const authClient = import.meta.env.VITE_AUTH_CLIENT

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
      domain={authDomain}
      clientId={authClient}
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
