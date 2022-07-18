import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const colors = {
  background: {
    light: '#fff',
    dark: '#282A36'
  },
  foreground: {
    dark: '#F8F8F2',
    light: 'gray.600'
  },
  selection: '#44475A',
  comment: '#6272A4',
  cyan: '#8BE9FD',
  purple: '#BD93F9'
}

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

export const theme = extendTheme({
  colors,
  styles: {
    global: (props: any) => ({
      'html, body': {
        background: 'background',
        color: 'foreground'
      }
    })
  },
  config
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
