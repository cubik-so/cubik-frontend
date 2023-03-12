import {
  Container,
  Heading,
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
import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import RoundsList from 'src/components/FundingRounds/RoundsList';
import SEO from 'src/components/SEO';

const Data = [{ name: '' }];

const FundingRounds = () => {
  const [wordEntered, setWordEntered] = useState();
  const [searchResult, setSearchResult] = useState(false);
  const [projectsData, setProjectsData] = useState(Data);
  //const { requestGatewayToken } = useGateway();
  const handleSearch = (event: { target: { value: any } }) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    if (searchWord === '') {
      setSearchResult(false);
      return setProjectsData(Data);
    }

    if (searchWord !== '') {
      setSearchResult(true);
    }

    const newFilter = Data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    setProjectsData(newFilter);
  };
  return (
    <>
      <SEO
        title={`Cubic | Projects`}
        description={`Quadratic fund your favorite solana Projects`}
        image={`https://solana.ghost.io/content/images/2022/06/solana-network-upgrades.png`}
      />
      <main>
        <Container maxW="7xl" px={{ base: '1.8rem', lg: '8rem' }} py="2rem">
          <VStack alignItems={'start'} justifyContent="start">
            <VStack
              py={{ base: '0rem', md: '3rem' }}
              maxW="22rem"
              gap={{ base: '1rem', md: '2rem' }}
            >
              <Heading
                color="#D1D1D1"
                fontWeight={'600'}
                pr={{ base: '3rem', md: '0rem' }}
                fontSize={{ base: '2xl', md: '3xl' }}
              >
                Discover funding rounds in the ecosystem.
              </Heading>
              <InputGroup
                rounded="4px"
                h="fit-content"
                background={'rgba(18, 18, 18, 0.4)'}
                // p="0.5rem 0rem"
                sx={{
                  backdropFilter: 'blur(14px)',
                  margin: '0px !important',
                  marginTop: '0px !important',
                }}
                zIndex="1"
                _after={{
                  content: `" "`,
                  position: 'absolute',
                  inset: '0',
                  borderRadius: '4px',
                  padding: '1px',
                  background:
                    'linear-gradient(20.84deg,rgba(51, 51, 51, 1), rgba(104, 104, 104, 0))',
                  WebkitMask:
                    'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  MaskComposite: 'exclude',
                }}
              >
                <InputLeftElement
                  w="3.5rem"
                  h="full"
                  pointerEvents="none"
                  bg="transparent"
                >
                  <BiSearch size="1.4rem" color="#5B5B5B" />
                </InputLeftElement>
                <Input
                  variant={'unstyled'}
                  pl="3rem"
                  //  border="none"
                  bg="transparent"
                  placeholder="Search Rounds"
                  _placeholder={{
                    color: '#5B5B5B',
                    opacity: '0.6',
                    fontSize: '14px',
                    fontWeight: '500',
                  }}
                  _focus={{
                    borderColor: 'transparent',
                    outline: 'none',
                    boxShadow: 'none',
                  }}
                  //  rounded="full"
                  h="2.5rem"
                  pb={'3px'}
                  value={wordEntered}
                  onChange={handleSearch}
                />
              </InputGroup>
            </VStack>
            <Tabs w="full" p="4rem 0rem" variant={'cubik'}>
              <TabList gap={{ base: '0.5rem', md: '1rem' }}>
                <Tab fontSize={{ base: 'sm', md: 'md' }}>Ongoing</Tab>
                <Tab fontSize={{ base: 'sm', md: 'md' }}>Upcoming</Tab>
                <Tab fontSize={{ base: 'sm', md: 'md' }}>Previous rounds</Tab>
              </TabList>
              <TabPanels>
                <TabPanel w="full" py={{ base: '1rem', md: '2rem' }}>
                  <RoundsList />
                </TabPanel>
                <TabPanel></TabPanel>
              </TabPanels>
            </Tabs>
          </VStack>
        </Container>
      </main>
    </>
  );
};

export default FundingRounds;
