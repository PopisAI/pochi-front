import Layout from '@/components/Layout'
import TokensList from '@/components/token/TokensList'

const Tokens = () => {
  return (
    <Layout>
      <TokensList rows={1} />
    </Layout>
  )
}

export default Tokens