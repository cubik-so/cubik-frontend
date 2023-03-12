import {
  Box,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import CustomTag from '../UI/Tags';

const RoundCard = () => {
  const router = useRouter();
  return (
    <Container
      onClick={() => {
        router.push('/rounds/superteamGrant');
      }}
      cursor="pointer"
      borderRadius={'4px'}
      rounded="4px"
      border="1px solid #222222"
      maxW="full"
      p={{ base: '1rem', md: '1.5rem' }}
      backgroundColor="#0F0F0F"
      position="relative"
      overflow="hidden"
    >
      <Stack>
        <VStack zIndex={'1'} alignItems={'start'}>
          <VStack alignItems={'start'}>
            <HStack>
              <Heading fontSize={{ base: 'md', md: '3xl' }}>
                Superteam Grants Round
              </Heading>
              <CustomTag color="red">Defi</CustomTag>
            </HStack>
            <Text color="#878787" fontSize={{ base: '10px', md: 'sm' }}>
              From 10th Feb, 2023 to 25th Apr, 2023
            </Text>
          </VStack>
          <Stack
            pt={{ base: '5rem', md: '3rem' }}
            direction={{ base: 'column', md: 'row' }}
            align={{ base: 'start', md: 'flex-end' }}
          >
            <Heading fontSize={{ base: 'xl', md: '3xl' }}>50,000$</Heading>
            <Text color="#878787" fontSize={{ base: '9px', md: 'xs' }}>
              Matching Pool Funds Available
            </Text>
          </Stack>
        </VStack>
        <Box
          width="20rem"
          height="20rem"
          //bg="white"
          position={'absolute'}
          right="0"
          zIndex={'0'}
          bottom={{ base: '0', md: '50%' }}
          transform={{
            base: 'scale(0.7) translate(50%,50%)',
            md: 'translate(20%,50%)',
          }}
        >
          <Center border="17px solid #111111" w="full" h="full" rounded="full">
            <Center
              border="17px solid transparent"
              w="full"
              h="full"
              rounded="full"
            >
              <Center
                border="17px solid #131313"
                w="full"
                h="full"
                rounded="full"
              >
                <Center
                  border="17px  solid transparent"
                  w="full"
                  h="full"
                  rounded="full"
                >
                  <Center
                    border="17px solid #181818"
                    w="full"
                    h="full"
                    rounded="full"
                  >
                    <Center
                      border="17px solid transparent"
                      w="full"
                      h="full"
                      rounded="full"
                    >
                      <CircularProgress
                        position={'absolute'}
                        value={40}
                        color="#11BD73"
                        thickness="12px"
                        size="120px"
                        trackColor="#212121"
                      >
                        <CircularProgressLabel>
                          <VStack
                            transform={'translateY(-4px)'}
                            gap={'0rem'}
                            spacing="0rem"
                          >
                            <Text fontSize={'3xl'} fontWeight="600">
                              20
                            </Text>
                            <Text
                              transform={'translateY(-6px)'}
                              fontSize={'10px'}
                            >
                              Days Left
                            </Text>
                          </VStack>
                        </CircularProgressLabel>
                      </CircularProgress>
                    </Center>
                  </Center>
                </Center>
              </Center>
            </Center>
          </Center>
        </Box>
      </Stack>
    </Container>
  );
};

export default RoundCard;
