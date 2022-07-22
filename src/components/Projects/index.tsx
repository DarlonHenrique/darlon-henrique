import { Container, Heading, Flex, useColorModeValue } from "@chakra-ui/react";
import { ProjectCard } from "./ProjectCard";
import { Repositories } from "../../pages";

interface ProjectsProps {
  repos: Repositories;
}

export function Projects({repos}: ProjectsProps) {
  const projectsBg = useColorModeValue('#01BAEF', '#383A59')

  return (
    <Container maxW={'full'} bgColor={projectsBg} mt={'10'} p={'5'}>
        <Heading
          color={'white'}
          as={'h1'}
          textAlign={'center'}
          fontWeight={'bold'}
          fontSize={['3xl', '4xl', '5xl']}
          my={'5'}
        >
          My Github Projects
        </Heading>
        <Flex justify={'space-around'} wrap={'wrap'}>
          {repos
            .filter(repo => repo.topics?.includes('portfolio'))
            .map(repo => (
              <ProjectCard
                key={repo.id}
                name={repo.name}
                description={repo.description}
                topics={repo.topics}
                href={repo.html_url}
              />
            ))}
        </Flex>
      </Container>
  )
}