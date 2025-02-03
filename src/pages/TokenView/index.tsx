import { useParams } from 'react-router-dom'
import Layout from '../../components/Layout'

const TokenView = () => {
  const { tokenId } = useParams()
  return <Layout>TokenView: {tokenId}</Layout>
}

export default TokenView
