import { Box, Button, Center, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const UserContributions = () => {
  const router = useRouter();
  return (
    <Center w="full" height="32rem">
      <VStack>
        <Box as="p" textStyle="title2">
          No Projects Funded
        </Box>
        <Box
          maxW="22rem"
          textAlign="center"
          as="p"
          pb="1rem"
          color="#B4B0B2"
          textStyle="body4"
        >
          Start Funding Projects on Cubik and support Public Goods
        </Box>
        <Button rounded="full" onClick={() => router.push('/projects')}>
          Create Project
        </Button>
      </VStack>
    </Center>
  );
};

export default UserContributions;
