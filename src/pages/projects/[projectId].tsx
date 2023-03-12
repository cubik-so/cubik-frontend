import { projectType } from '@/interfaces/project';
import { Container, Stack } from '@chakra-ui/react';
import { AboutProject } from 'src/components/Projects/ProjectsDetail/AboutProject';
import { ProjectInteractions } from 'src/components/Projects/ProjectsDetail/ProjectInteractions';
import { getProjectByID } from 'src/lib/api/projectsHelper';

export type projectPropsType = {
  projectData: {
    data: projectType;
  };
};

const ProjectDetails = (props: projectPropsType) => {
  console.log('Project data from server side rendered component - ', props);

  return (
    <Container maxW="7xl" py={{ base: '1rem', md: '2rem' }}>
      <Stack direction={{ base: 'column', md: 'row' }} gap="2rem">
        <AboutProject projectDetails={props.projectData.data} />
        <ProjectInteractions projectDetails={props.projectData.data} />
      </Stack>
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
