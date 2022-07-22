import type { GetStaticProps, NextPage } from 'next'
import { Octokit } from 'octokit'
import { Endpoints } from '@octokit/types'
import Header from '../components/Header'
import { Projects } from '../components/Projects'

export type Repositories = Endpoints['GET /users/{username}/repos']['response']['data']

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
      <Projects repos={repos}/>
    </>
  )
}

export default Home
