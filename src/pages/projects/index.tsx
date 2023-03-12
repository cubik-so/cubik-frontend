import { projectType } from '@/interfaces/project';
import {
  Box,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import FundingRoundBanner from 'src/components/FundingRounds/FundingRoundBanner';
import ProjectList from 'src/components/Projects/ProjectsPage/ProjectList';
import SEO from 'src/components/SEO';
import { getAllProjects } from 'src/lib/api/projectsHelper';

type projectsPropsType = {
  allProjectsData: {
    data: [projectType];
  };
};

const Projects = (props: projectsPropsType) => {
  const fetchedPropsData = props.allProjectsData.data.map(
    (element: { industry: string; socials: string }) => ({
      ...element,
      industry: JSON.parse(element.industry),
      socials: JSON.parse(element.socials),
    })
  );
  const [wordEntered, setWordEntered] = useState();
  const [searchResult, setSearchResult] = useState(false);
  const [projectsData, setProjectsData] = useState(fetchedPropsData);

  console.log('get all projects data - ', fetchedPropsData);
  const handleSearch = (event: { target: { value: any } }) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    if (searchWord === '') {
      setSearchResult(false);
      return setProjectsData(props.allProjectsData.data);
    }

    if (searchWord !== '') {
      setSearchResult(true);
    }

    const newFilter = projectsData.filter(({ value }: any) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    setProjectsData(newFilter);
  };

  return (
    <>
      <SEO
        title={`Cubik - Projects`}
        description={`Quadratic fund your favorite solana Projects`}
        image={`https://solana.ghost.io/content/images/2022/06/solana-network-upgrades.png`}
      />
      <main>
        <Container
          maxW="7xl"
          px={{ base: '1.8rem', lg: '2rem' }}
          py={{ base: '4rem', md: '5rem' }}
        >
          <VStack w="full" alignItems={'start'} justifyContent="start">
            <VStack w="full" align={'start'} gap={{ base: '2rem', md: '2rem' }}>
              <VStack align={'start'}>
                <Box as="p" textStyle={{ base: 'headline3', md: 'headline1' }}>
                  Discover and Fund Public Goods
                </Box>
                <Box as="p" textStyle={{ base: 'body3', md: 'body2' }}>
                  Help fund projects that matter to you and your community
                </Box>
              </VStack>
              <FundingRoundBanner />
              <InputGroup
                rounded="8px"
                h="fit-content"
                background={'#05060F'}
                border="1px solid #1B181A"
                zIndex="1"
              >
                <InputLeftElement
                  w="3.5rem"
                  h="full"
                  pointerEvents="none"
                  bg="transparent"
                >
                  <BiSearch size="1.4rem" color="#757575" />
                </InputLeftElement>
                <Input
                  variant={'unstyled'}
                  pl="3rem"
                  fontSize={'md'}
                  background="#05060F"
                  bg="transparent"
                  placeholder="Search For Projects, Categories..."
                  _placeholder={{
                    fontcolor: '#757575',
                    fontSize: 'md',
                    opacity: '0.4',
                    fontWeight: '500',
                  }}
                  h="2.5rem"
                  pb={'3px'}
                  value={wordEntered}
                  onChange={handleSearch}
                />
              </InputGroup>
            </VStack>
            <Tabs p="4rem 0rem" variant={'cubik'}>
              <TabList gap={{ base: '0.5rem', md: '1rem' }}>
                <Tab fontSize={{ base: 'md', md: 'lg' }}>Projects</Tab>
                <Tab fontSize={{ base: 'md', md: 'lg' }}>Collections</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <ProjectList allProjectsData={projectsData} />
                </TabPanel>
                <TabPanel>
                  <ProjectList allProjectsData={projectsData} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </VStack>
        </Container>
      </main>
    </>
  );
};
export async function getServerSideProps() {
  try {
    const allProjectsData = await getAllProjects();
    if (!allProjectsData) {
      return {
        notFound: true,
      };
    }
    return {
      props: { allProjectsData },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}

export default Projects;
