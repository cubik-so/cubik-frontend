import { projectType } from '@/interfaces/project';
import { Container, VStack } from '@chakra-ui/react';
import { ProjectsAboutAndDonation } from 'src/components/Projects/ProjectsDetail/ProjectComponents/ProjectAboutAndDonation';
import { ProjectDetailLayout } from 'src/components/Projects/ProjectsDetail/ProjectDetailsLayout';
import { getProjectByID } from 'src/lib/api/projectsHelper';

export type projectPropsType = {
  projectData: {
    data: projectType;
  };
};

const ProjectDetails = (props: projectPropsType) => {
  console.log('Project data from server side rendered component - ', props);

  return (
    <Container maxW="6xl" py={{ base: '1rem', md: '2rem' }}>
      <VStack gap="2rem">
        {/* @ts-ignore */}
        <ProjectsAboutAndDonation projectDetails={props.projectData.data} />
        {/* @ts-ignore */}
        <ProjectDetailLayout projectDetails={props.projectData.data} />
      </VStack>
    </Container>
  );
};
// server side render this page

export async function getServerSideProps(context: { query: any }) {
  const { query } = context;
  const { projectId } = query;
  console.log('project id - ', projectId);
  try {
    const projectData = await getProjectByID({ project_id: projectId });
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
