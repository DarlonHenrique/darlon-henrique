import Image from 'next/image'
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue
} from '@chakra-ui/react'

interface ProjectCardProps {
  name: String
  description: String | null
  topics: String[] | undefined
}

export function ProjectCard({ name, description, topics }: ProjectCardProps) {
  return (
    <Center cursor={'pointer'} py={6}>
      <Box w={[300, 400]} bg={'background'} boxShadow={'2xl'} rounded={'md'} p={6} overflow={'hidden'}>
        <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'} overflow={'hidden'}>
          <Image src={'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' } layout={'fill'}/>
        </Box>
        <Stack overflow={'hidden'}>
          <Text color={'green.500'} textTransform={'uppercase'} fontWeight={800} fontSize={'sm'} letterSpacing={1.1} minH={'42px'}>
            {topics?.join(' ')}
          </Text>
          <Heading color={'foreground'} fontSize={'2xl'} fontFamily={'body'} noOfLines={2}>
            {name}
          </Heading>
          <Text noOfLines={1} color={'gray.400'}>
            {description}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Achim Rolle</Text>
            <Text color={'gray.400'}>Feb 08, 2021 · 6min read</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}
