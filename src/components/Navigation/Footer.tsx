import { Box, Center, Container, HStack, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import Logo from '../assets/logo/Logo';

export default function Footer() {
  return (
    <Container
      as={Stack}
      maxW={'7xl'}
      w="full"
      p={{
        base: '1rem',
        md: '2rem 3rem',
      }}
      direction={{ base: 'column', md: 'row' }}
      spacing={4}
      justify={{ base: 'center', md: 'space-between' }}
      align={{ base: 'center', md: 'center' }}
    >
      <Stack
        direction={{ base: 'column', md: 'row' }}
        w="full"
        alignItems={'center'}
        justifyContent={{ base: 'center', md: 'space-between' }}
      >
        <Logo />
        <HStack>
          <Box as="p" textStyle={'body4'}>
            Powered by
          </Box>
          <Center>
            <Image
              src="/solanaLogo.png"
              alt="powered by solana"
              width={80}
              height={12}
            />
          </Center>
        </HStack>
      </Stack>
    </Container>
  );
}
