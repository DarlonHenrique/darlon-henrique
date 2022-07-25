import Image from 'next/image'
import { Box, Center, Heading, Text, Stack, Avatar, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'

interface ProjectCardProps {
  name: string
  description: string | null
  topics: string[] | undefined
  href: string
  avatar: string
  updatedAt: string | null | undefined 
}

export function ProjectCard({ name, description, topics, href, avatar, updatedAt }: ProjectCardProps) {
  const bgCard = useColorModeValue('#F8F8F2', '#282A36')
  const borderColor = useColorModeValue('#383A59', '#F8F8F2')

  return (
    <a href={href} target='_blank' rel="noreferrer" >
    <Center cursor={'pointer'} py={6}>
      <Box
        w={[300, 400]}
        bg={bgCard}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}
          overflow={'hidden'}
          borderBottom={'1px solid'}
          borderColor={borderColor}
        >
          <Image
            src={
              `https://raw.githubusercontent.com/DarlonHenrique/${name}/main/${name}.jpeg`
            }
            layout={'fill'}
          />
        </Box>
        <Stack overflow={'hidden'}>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}
            minH={'42px'}
          >
            {topics?.join(' ')}
          </Text>
          <Heading
            color={'foreground'}
            fontSize={'2xl'}
            fontFamily={'body'}
            noOfLines={2}
          >
            {name}
          </Heading>
          <Text noOfLines={1} color={'gray.400'}>
            {description}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={avatar}
            name={'Darlon Henrique'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Darlon Henrique</Text>
            <Text color={'gray.400'}>{updatedAt && new Intl.DateTimeFormat('pt-BR', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(updatedAt))}</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
    </a>
  )
}
