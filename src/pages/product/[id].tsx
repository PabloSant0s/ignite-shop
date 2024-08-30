import { useRouter } from 'next/router'

export default function ProductDetails() {
  const { query } = useRouter()
  return <h1>Product {query.id} </h1>
}
