import { projectType } from '@/interfaces/project';
import {
  Avatar,
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Key } from 'react';
import {
  FaDiscord,
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { HiFlag, HiLink } from 'react-icons/hi';
import { getDomain } from 'src/lib/functions';
import { IUser } from 'src/store/userStore';
import { ProjectsDetailedDescription } from './ProjectComponents/DetailedDescription';

const ProjectLink = ({ urlName }: { urlName: string }) => {
  switch (urlName) {
    case 'url':
      return <HiLink />;
    case 'twitter':
      return <FaTwitter />;
    case 'discord':
      return <FaDiscord />;
    case 'telegram':
      return <FaTelegramPlane />;
    case 'youtube':
      return <FaYoutube />;
    case 'flag':
      return <HiFlag />;
    default:
      return <></>;
  }
};

const ProjectOwners = ({ projectOwners }: { projectOwners: IUser }) => {
  //const projectOwnersData = JSON.parse(projectOwners);
  return projectOwners.map((projectOwner: IUser, key: any) => (
    <HStack
      // pt="0.5rem"
      key={key}
      py={{ base: '1rem', sm: '0.8rem', md: '0.4rem' }}
      pl={{ base: '2rem', md: '1.8rem' }}
      gap={{ base: '0.6rem', sm: '0.8rem', md: '1rem' }}
      w={{ base: '45vw', sm: '13rem', md: '15rem' }}
      justifyContent={'space-between'}
    >
      <HStack gap="0.6rem">
        <Avatar size={{ base: 'sm', md: 'sm' }} src={projectOwner.icon} />
        <Text fontSize={{ base: 'sm', md: 'md' }}>{projectOwner.username}</Text>
      </HStack>
      {/* <Text
        display={{ base: 'none', sm: 'block', md: 'block' }}
        fontSize={{ base: 'xs', md: 'md' }}
      >
        {projectOwner.pubKey}
      </Text> */}
    </HStack>
  ));
};

// sidebar
const SideBar = ({ projectDetails }: { projectDetails: projectType }) => {
  const socials = JSON.parse(projectDetails.socials);
  return (
    <Stack
      justify={'space-between'}
      direction={{ base: 'row', sm: 'row', md: 'column' }}
      gap="1rem"
      justifyContent={'start'}
      position={'fixed'}
      right="20rem"
    >
      <Box w={{ base: 'auto', sm: 'auto', md: '18rem' }}>
        <Heading fontSize={{ base: 'md', md: '2xl' }}>Links</Heading>
        <VStack
          py="1rem"
          pl={{ base: '1rem', md: '2rem' }}
          align={'start'}
          gap="0rem"
          color="#CBCBCB"
        >
          <Button
            variant={'unstyled'}
            iconSpacing={'0.8rem'}
            p="0"
            h="fit-content"
            fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
            leftIcon={<ProjectLink urlName={'url'} />}
          >
            {getDomain(projectDetails.project_link)}
          </Button>
          {socials.map(
            (
              link: { name: string; url: string },
              key: Key | null | undefined
            ) => (
              <Button
                iconSpacing={'0.8rem'}
                h="fit-content"
                variant={'unstyled'}
                fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
                key={key}
                leftIcon={<ProjectLink urlName={link.name} />}
              >
                {getDomain(link.url)}
              </Button>
            )
          )}{' '}
          <Button
            variant={'unstyled'}
            iconSpacing={'0.8rem'}
            p="0"
            h="fit-content"
            fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
            leftIcon={<ProjectLink urlName={'flag'} />}
          >
            Flag
          </Button>
        </VStack>
      </Box>
      <Box w={{ base: 'auto', sm: 'auto', md: '18rem' }}>
        <Heading fontSize={{ base: 'md', md: '2xl' }} pb="0.8rem">
          Project Owners
        </Heading>
        {/* @ts-ignore */}
        {/* <ProjectOwners projectOwners={projectDetails.owner} /> */}
      </Box>
    </Stack>
  );
};

// section 2
export const ProjectDetailLayout = ({
  projectDetails,
}: {
  projectDetails: projectType;
}) => {
  return (
    <Stack
      mx="auto"
      w="full"
      maxW="6xl"
      gap={{ base: '1rem', md: '4rem' }}
      p={{ base: '0rem', sm: '1rem', md: '1rem', lg: '1rem' }}
      display={'flex'}
      flexDir={{ base: 'column', md: 'row' }}
      justifyContent="space-between"
    >
      <Stack alignSelf={'start'} maxW={'45rem'} direction={'column'} gap="2rem">
        <ProjectsDetailedDescription
          description={projectDetails.long_description}
        />
        {/* <ProjectsTabs /> */}
      </Stack>
      <SideBar projectDetails={projectDetails} />
    </Stack>
  );
};
