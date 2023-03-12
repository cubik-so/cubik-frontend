import { projectType } from '@/interfaces/project';
import {
  Avatar,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react';
import CustomTag from 'src/components/UI/Tags';
import { ProjectsDonation } from './Donations';

export const ProjectsAboutAndDonation = ({
  projectDetails,
}: {
  projectDetails: projectType;
}) => {
  const categories = JSON.parse(projectDetails.industry);
  return (
    <Container
      maxW="6xl"
      p={{ base: '0rem', sm: '1rem', md: '1rem', lg: '1rem' }}
      display={'flex'}
      flexDir={{ base: 'row', lg: 'row' }}
      alignItems={{ base: 'end', md: 'center' }}
      justifyContent="space-between"
      position="relative"
    >
      <Stack
        direction={{ base: 'column', md: 'row' }}
        gap={{ base: '0.5rem', md: '1rem' }}
        width={{ base: '50vw', md: '40vw', lg: '45rem' }}
      >
        <Avatar src={projectDetails.logo} size={{ base: 'lg', md: '2xl' }} />
        <VStack
          alignItems={'start'}
          textAlign="start"
          spacing={{ base: '0.2rem', md: '0.8rem' }}
        >
          <Heading fontSize={{ base: 'xl', md: '3xl' }}>
            {projectDetails.project_name}
          </Heading>
          <Text
            noOfLines={{ base: 2, md: 3 }}
            color="#CBCBCB"
            fontSize={{ base: 'xs', md: 'md' }}
          >
            {projectDetails.short_description}
          </Text>
          <Wrap flexDirection={'row'} spacing="0.4rem" pt="0.5rem">
            {categories.map((tag: any, key: React.Key | null | undefined) => {
              return (
                <CustomTag color={tag.label} key={key}>
                  {tag.label}
                </CustomTag>
              );
            })}
          </Wrap>
        </VStack>
      </Stack>
      {/* <Center height="100px" opacity={'0.3'}>
        <Divider orientation="vertical" />
      </Center> */}
      <ProjectsDonation projectDetails={projectDetails} />
    </Container>
  );
};
