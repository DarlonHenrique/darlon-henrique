import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    background: '#282A36',
    foreground: '#F8F8F2',
    selection: '#44475A',
    comment: '#6272A4',
    cyan: '#8BE9FD',
    purple: '#BD93F9'
  },
  styles: {
    global: {
      'html, body': {
        background: 'background',
        color: 'foreground'
      }
    }
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
