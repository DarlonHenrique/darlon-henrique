import { Button, Flex, Text, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export default function Header() {
  const { toggleColorMode, colorMode} = useColorMode()

  return (
    <Flex direction='column' m={'10'} align='left' justify='center'>
      <Flex justify={'space-between'}>
        <Text fontSize='5xl' mb={'10'} align={'left'} fontWeight='black'>
          Darlon Henrique
        </Text>

        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>

      <Text
        fontSize={['2xl', '2xl']}
        maxWidth='600'
        textAlign='left'
        opacity={0.7}
        fontWeight={'medium'}
      >
        Hi dear, I am Darlon Henrique, a web developer and software engineer
        from brazil, welcome to my website!
      </Text>
    </Flex>
  )
}
