import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/product'

export default function Product() {
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
          vitae nesciunt architecto, sit quia laboriosam temporibus beatae,
          similique unde ipsa velit! Quidem atque amet nisi in ipsa itaque
          placeat quis.
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
