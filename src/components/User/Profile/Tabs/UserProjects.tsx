import { Box, Button, Center, VStack } from '@chakra-ui/react';

const UserProjects = () => {
  return (
    <Center w="full" height="32rem">
      <VStack>
        <Box as="p" textStyle="title2">
          No Project Created
        </Box>
        <Box
          maxW="22rem"
          textAlign="center"
          as="p"
          pb="1rem"
          color="#B4B0B2"
          textStyle="body4"
        >
          Create your first project to participate in your first decentralized
          grants round
        </Box>
        <Button rounded="full">Create Project</Button>
      </VStack>
    </Center>
  );
};

export default UserProjects;
