import { Flex, Text } from '@chakra-ui/react'

export default function Header() {
  return (
    <Flex direction='column' align='center' mt='2' justify='center'>
      <Text fontSize='5xl' align={'center'} fontWeight='black'>
        Darlon Henrique
      </Text>
      <Text fontSize='3xl' marginInline={'10'} maxWidth='1000' textAlign='center' fontWeight=''>
        Hi dear, I'm Darlon Henrique, a web developer and software engineer from
        brazil, welcome to my website!
      </Text>
    </Flex>
  )
}
