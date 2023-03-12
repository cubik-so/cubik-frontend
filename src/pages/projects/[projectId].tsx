import { Container, VStack } from '@chakra-ui/react';
import { getProjectByID } from 'src/lib/api/projectsHelper';

type projectPropsType = {
  projectData: any;
};

const ProjectDetails = (props: projectPropsType) => {
  console.log('Project data from server side rendered component - ', props);

  return (
    <Container maxW="6xl" py={{ base: '1rem', md: '2rem' }}>
      <VStack gap="2rem">
        {/* @ts-ignore */}
        {/* <ProjectsAboutAndDonation projectDetails={project[0]} /> */}
        {/* @ts-ignore */}
        {/* <ProjectDetailLayout projectDetails={project[0]} /> */}
      </VStack>
    </Container>
  );
};
// server side render this page

export async function getServerSideProps(context: { query: any }) {
  const { query } = context;
  const { projectId } = query;

  try {
    const projectData = await getProjectByID({ projectId });
    console.log('project data from server - ', projectData);
    if (!projectData) {
      return {
        notFound: true,
      };
    }
    return {
      props: { projectData },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}

export default ProjectDetails;
