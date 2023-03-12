import { projectType } from '@/interfaces/project';
import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  useDisclosure,
  VStack,
  Wrap,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { BiLink } from 'react-icons/bi';
import CustomTag from 'src/components/UI/Tags';
import { formatNumberWithK, getDomain } from 'src/lib/functions';
import ProjectsData from '../../../data/projects.json';

type PropsType = {
  project: projectType;
};

const ProjectCard = ({ project }: PropsType) => {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();
  return (
    <Center
      //onMouseOver={onToggle}
      // onMouseLeave={onToggle}
      onClick={() => {
        router.push('/projects/' + project.name);
        router.push({
          pathname: '/projects/[projectId]',
          query: { projectID: '' },
        });
      }}
      w="100%"
      flexDirection="column"
      h={{ base: '', md: '20rem' }}
      backgroundColor="#070914"
      rounded="6px"
      cursor="pointer"
      p={{ base: '1.5rem', xl: '1rem 1.8rem' }}
      maxW={{
        base: '83vw',
        sm: '83vw',
        md: '42vw',
        lg: '30vw',
        xl: '24rem',
      }}
      _hover={{
        backgroundColor: '#060714',
      }}
    >
      <VStack w="full" alignItems={'start'} justifyContent="start">
        <HStack
          py={{ base: '0.5rem', md: '1rem' }}
          justifyContent={'space-between'}
        >
          <Avatar
            src={project.logo}
            name="anchor"
            size={{ base: 'md', md: 'lg' }}
          />
        </HStack>
        <VStack gap="0" spacing="0" w="full">
          <HStack align={'end'} w="full" justify="space-between">
            <Box
              pb="0.3rem"
              as="p"
              textStyle={{ base: 'title4', md: 'title2' }}
            >
              {project.name}
            </Box>
            <Heading as="p" textStyle={{ base: 'title2', md: 'title1' }}>
              ${formatNumberWithK(project.total_funding_raised)}
            </Heading>
          </HStack>
          <HStack w="full" justify="space-between">
            <Button
              as="a"
              href={project.url}
              target="_blank"
              h="fit-content"
              leftIcon={<BiLink />}
              variant={'unstyled'}
              fontSize={{ base: 'xs', md: 'sm' }}
              color="#FF85D6"
              fontWeight={'600'}
              display="flex"
              alignItems={'center'}
              justifyContent="start"
              gap="0px"
              iconSpacing={'3px'}
              _hover={{
                textDecoration: 'underline',
              }}
            >
              {getDomain(project.url)}
            </Button>
            <Box
              color="#B4B0B2"
              as="p"
              textStyle={{ base: 'body5', md: 'body5' }}
            >
              Raised
            </Box>
          </HStack>
        </VStack>
      </VStack>
      <Box
        color="#B4B0B2"
        as="p"
        pt="1rem"
        textStyle={{ base: 'body4', md: 'body4' }}
        sx={{
          noOfLines: '2',
        }}
      >
        {project.about}
      </Box>
      <Wrap w="full" mt="auto" pb="0.4rem">
        {project.tags.map((tag: string, key: React.Key | null | undefined) => {
          return (
            <CustomTag color={tag} key={key}>
              {tag}
            </CustomTag>
          );
        })}
      </Wrap>
      {/* <SlideFade in={isOpen} offsetY="20px">
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          <Button>Hello world</Button>
        </Box>
      </SlideFade> */}
    </Center>
  );
};
const ProjectList = () => {
  return (
    <Container maxW="7xl" overflow={'visible'} p="0">
      <Wrap
        // border="1px solid"
        // borderColor={{
        //   base: 'red',
        //   sm: 'green',
        //   md: 'blue',
        //   lg: 'pink',
        //   xl: 'orange',
        // }}
        spacing="1.5rem"
        w="100%"
        padding="2rem 0px"
        margin="0"
        justify={'center'}
        align="center"
        direction={{ base: 'column', sm: 'row', md: 'row' }}
      >
        {ProjectsData.map((project, key) => {
          //@ts-ignore
          return <ProjectCard project={project} key={key} />;
        })}
      </Wrap>
    </Container>
  );
};

export default ProjectList;
