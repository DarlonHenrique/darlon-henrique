import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import type { Styles } from "@chakra-ui/theme-tools" 

const styles: Styles = {
    global: (props) => ({
      'html, body': {
        background: mode('#F8F8F2', '#282A36')(props),
        color: mode('#000', '#fff')(props)
      }
    })
}

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

export const theme = extendTheme({
  styles,
  config
})
