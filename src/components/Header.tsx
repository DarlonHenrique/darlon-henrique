import { Button, Flex, Switch, Text, useColorMode } from '@chakra-ui/react'

export default function Header() {
  const { toggleColorMode } = useColorMode()

  return (
    <Flex direction='column' m={'10'} align='left' justify='center'>
      <Flex justify={'space-between'} >
        <Text fontSize='5xl' mb={'10'} align={'left'} fontWeight='black'>
          Darlon Henrique
        </Text>

        <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
      </Flex>

      <Text
        fontSize={['2xl', '2xl']}
        maxWidth='600'
        color={'gray.400'}
        textAlign='left'
        fontWeight={'medium'}
      >
        Hi dear, I am Darlon Henrique, a web developer and software engineer
        from brazil, welcome to my website!
      </Text>
    </Flex>
  )
}
