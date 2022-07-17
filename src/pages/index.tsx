import type { GetStaticProps, NextPage, InferGetStaticPropsType } from 'next'
import { Octokit } from 'octokit'
import { Endpoints } from '@octokit/types'
import Header from '../components/Header'
import { ProjectCard } from '../components/ProjectCard'
import { Container, Flex, Grid, Text } from '@chakra-ui/react'

type Repositories = Endpoints['GET /users/{username}/repos']['response']['data']

export const getStaticProps: GetStaticProps = async () => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN
  })

  const response = await octokit.request('GET /users/{username}/repos', {
    username: 'darlonhenrique'
  })

  return {
    props: {
      repos: response.data
    }
  }
}

const Home: NextPage<{ repos: Repositories }> = ({ repos }) => {
  return (
    <>
      <Header />
      <Container maxW={'full'} bgColor={'selection'} mt={'10'} p={'5'}>
        <Text
          color={'foreground'}
          align={'center'}
          fontWeight={'bold'}
          fontSize={'3xl'}
        >
          My Github Projects
        </Text>
        <Flex justify={'space-around'} wrap={'wrap'}>
          {repos
            .filter(repo => repo.topics?.includes('portfolio'))
            .map(repo => (
              <ProjectCard
                key={repo.id}
                name={repo.name}
                description={repo.description}
                topics={repo.topics}
              />
            ))}
        </Flex>
      </Container>
    </>
  )
}

export default Home
