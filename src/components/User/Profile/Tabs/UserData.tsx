import { Box, Container, HStack, Icon, VStack } from '@chakra-ui/react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import BadgesList from './BadgesList';

const UserData = () => {
  return (
    <Container maxW="full" p="0" pt="2rem">
      <VStack alignItems={'start'} w="full" gap="3rem">
        <VStack
          alignItems={'start'}
          border="1px solid #222222"
          bg="black"
          p="1rem 1.5rem"
          rounded="8px"
          gap="0.5rem"
          h="auto"
        >
          <HStack w="10rem" justify={'space-between'}>
            <Box as="p" textStyle={'body4'} color="#B8B8B8">
              Amount Raised
            </Box>
            <Icon color="#B8B8B850" as={AiOutlineInfoCircle} />
          </HStack>
          <Box textStyle={'title1'} fontWeight={'500'}>
            $0.0
          </Box>
          {/* <Text pt="2.5rem"></Text> */}
        </VStack>
        <BadgesList />
      </VStack>
    </Container>
  );
};

export default UserData;
