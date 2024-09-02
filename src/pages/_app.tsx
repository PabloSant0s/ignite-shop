import type { AppProps } from 'next/app'

import { globalStyle } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app'

import logoImg from '../assets/logo.svg'

globalStyle()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logoImg.src} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
