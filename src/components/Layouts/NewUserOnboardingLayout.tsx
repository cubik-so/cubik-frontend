import { Container, Heading, Text, VStack } from '@chakra-ui/react';
import { ReactNode } from 'react';

type PropsType = {
  heading: String;
  subHeading: String;
  children: ReactNode;
};

const NewUserOnboardingLayout = ({
  heading,
  subHeading,
  children,
}: PropsType) => {
  return (
    <Container
      py={{ base: '1rem', md: '4rem' }}
      px="0"
      maxW="full"
      minH="80vh"
      h="full"
    >
      <VStack
        maxW={{ base: '18rem', sm: '22rem', md: '22rem' }}
        mx="auto"
        textAlign={'center'}
        _before={{
          zIndex: '-1',
          content: `" "`,
          position: 'absolute',
          top: `1%`,
          left: `50%`,
          overflow: 'hidden',
          width: '6rem',
          height: '6rem',
          transform: 'translate(-50%, 50%)',
          filter: 'blur(120px)',
          WebkitBackdropFilter: 'blur(0px)',
          WebkitFilter: 'blur(120px)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
        }}
      >
        <Heading fontSize={{ base: '2xl', md: '3xl' }}>{heading}</Heading>
        <Text color="#C5C5C5" fontSize={{ base: 'xs', md: 'sm' }}>
          {subHeading}
        </Text>
        <VStack
          w={{ base: '85vw', sm: '60vw', md: 'full' }}
          maxW={{ base: '20rem', sm: '20rem', md: '24rem' }}
          p={{ base: '1.4rem 0rem', md: '1.4rem 0rem' }}
          _before={{
            zIndex: '-1',
            content: `" "`,
            position: 'absolute',
            //top: `1%`,
            //left: `50%`,
            overflow: 'hidden',
            width: '6rem',
            height: '6rem',
            transform: 'translate(-4rem, -2rem)',
            filter: 'blur(120px)',
            WebkitBackdropFilter: 'blur(0px)',
            WebkitFilter: 'blur(120px)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
          }}
          gap="0.4rem"
        >
          {children}
        </VStack>
      </VStack>
    </Container>
  );
};

export default NewUserOnboardingLayout;
