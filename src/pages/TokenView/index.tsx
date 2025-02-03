import { useParams } from "react-router-dom"

const TokenView = () => {
  const { tokenId } =useParams()
  return (
    <div>TokenView: {tokenId}</div>
  )
}

export default TokenView