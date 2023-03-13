import { Container, Stack } from '@chakra-ui/react';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { AboutProject } from 'src/components/Projects/ProjectsDetail/AboutProject';
import { ProjectInteractions } from 'src/components/Projects/ProjectsDetail/ProjectInteractions';
import { getProjectByID } from 'src/lib/api/projectsHelper';

const ProjectDetails = () => {
  const router = useRouter();
  const projectData = useQuery({
    queryFn: ({ queryKey }) =>
      getProjectByID({ project_id: queryKey[1] as string }),
    queryKey: ['project', router.query.projectId],
  });
  return (
    <Container maxW="7xl" py={{ base: '1rem', md: '2rem' }}>
      <Stack direction={{ base: 'column', md: 'row' }} gap="2rem">
        <AboutProject projectDetails={projectData.data.data} />
        <ProjectInteractions projectDetails={projectData.data.data} />
      </Stack>
    </Container>
  );
};
// server side render this page

export async function getServerSideProps(context: { query: any }) {
  const { query } = context;
  const { projectId } = query;
  const queryClient = new QueryClient();
  try {
    await queryClient.prefetchQuery(['project', projectId], () =>
      getProjectByID({ project_id: projectId })
    );
    return {
      props: { dehydratedState: dehydrate(queryClient) },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}

export default ProjectDetails;
