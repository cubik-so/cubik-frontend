import { Button, HStack, Textarea, VStack } from '@chakra-ui/react';

const Discussions = () => {
  return (
    <>
      <VStack w={'full'} mt={6}>
        <Textarea
          h={32}
          minH={32}
          placeholder="Start wrting here....."
          border={'1px solid white'}
        />
        <HStack w={'full'} align={'end'} justify={'end'}>
          <Button
            backgroundColor={'#D645A6 !important'}
            color="white"
            py={{ base: '1rem', md: '1.2rem' }}
            px={{ base: '1rem', md: '1.6rem' }}
            fontSize={{ base: 'sm', md: 'md' }}
            fontWeight="700"
          >
            Comment
          </Button>
        </HStack>
      </VStack>
    </>
  );
};

export default Discussions;
