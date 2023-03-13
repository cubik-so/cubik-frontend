import { projectType } from '@/interfaces/project';
import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  IconButton,
  Stack,
  Wrap,
} from '@chakra-ui/react';
import { Key } from 'react';
import {
  FaDiscord,
  FaGithub,
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { HiLink } from 'react-icons/hi';
import CustomTag from 'src/components/UI/Tags';
import { getDomain } from 'src/lib/functions';
import { ProjectsDetailedDescription } from './ProjectComponents/DetailedDescription';
import { ProjectsTabs } from './ProjectComponents/ProjectTabs';

const ProjectLink = ({ urlName }: { urlName: string }) => {
  switch (urlName) {
    case 'url':
      return <HiLink color="#FBF8FF" />;
    case 'Twitter':
      return <FaTwitter color="#FBF8FF" />;
    case 'Discord':
      return <FaDiscord color="#FBF8FF" />;
    case 'Telegram':
      return <FaTelegramPlane color="#FBF8FF" />;
    case 'Youtube':
      return <FaYoutube color="#FBF8FF" />;
    case 'Github':
      return <FaGithub color="#FBF8FF" />;
    default:
      return <></>;
  }
};

export const AboutProject = ({
  projectDetails,
}: {
  projectDetails: projectType;
}) => {
  const categories = JSON.parse(projectDetails.industry);
  const socials = JSON.parse(projectDetails.socials);
  return (
    <Container
      maxW="6xl"
      p={{ base: '0rem', sm: '1rem', md: '1rem', lg: '1rem' }}
      display={'flex'}
      flex="3"
      flexDir={{ base: 'row', lg: 'column' }}
      alignItems={{ base: 'end', md: 'center' }}
      justifyContent="start"
      gap="2rem"
    >
      <Stack
        direction={{ base: 'column', md: 'column' }}
        gap={{ base: '0.5rem', md: '1rem' }}
        width={'100%'}
      >
        <Avatar src={projectDetails.logo} size={{ base: 'lg', md: 'xl' }} />
        <HStack gap="1rem">
          <Box as="p" textStyle={'headline3'} textTransform="capitalize">
            {projectDetails.project_name}
          </Box>
          <Wrap flexDirection={'row'} spacing="0.4rem" pt="0.5rem">
            {categories.map((tag: any, key: React.Key | null | undefined) => {
              return (
                <CustomTag color={tag.label} key={key}>
                  {tag.label}
                </CustomTag>
              );
            })}
          </Wrap>
        </HStack>
        <Box as="p" textStyle={'body2'} color="#CDCACC">
          {projectDetails.short_description}
        </Box>
        <HStack>
          <Button
            iconSpacing={'0.8rem'}
            variant="unstyled"
            color="white"
            h="3rem"
            display={'flex'}
            alignItems="center"
            _hover={{
              backgroundColor: '#ffffff30',
            }}
            rounded="full"
            px="1rem"
            backgroundColor="#ffffff10"
            fontSize={{ base: 'sm', sm: 'md', md: 'xl' }}
            leftIcon={<ProjectLink urlName={'url'} />}
          >
            <Box as="p" textStyle={'body4'}>
              {getDomain(projectDetails.project_link)}
            </Box>
          </Button>
          {socials.map((link: { name: string; url: string }, key: Key) => (
            <IconButton
              aria-label={link.name}
              variant={'unstyled'}
              fontSize={{ base: 'sm', sm: 'md', md: 'xl' }}
              display="flex"
              alignItems={'center'}
              w="3rem"
              h="3rem"
              rounded="full"
              backgroundColor="#ffffff10"
              key={key}
              icon={<ProjectLink urlName={link.name} />}
              _hover={{
                backgroundColor: '#ffffff30',
              }}
            />
          ))}
        </HStack>
      </Stack>
      <Stack alignSelf={'start'} maxW={'45rem'} direction={'column'} gap="2rem">
        <ProjectsDetailedDescription
          description={projectDetails.long_description}
        />
      </Stack>
      <ProjectsTabs />
    </Container>
  );
};
