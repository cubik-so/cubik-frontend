import {
  Box,
  Collapse,
  Container,
  Flex,
  HStack,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import Hamburger from 'hamburger-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { memo } from 'react';
import Logo from '../assets/logo/Logo';

const Navbar = memo(function Header({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  const { isOpen, onToggle, onClose } = useDisclosure();

  const NavItems = () => {
    if (router.pathname.split('/')[1] === 'connect-wallet') return <></>;
    return (
      <HStack gap="3rem">
        <Link href="/projects" passHref>
          <Box
            as="p"
            color={
              router.pathname.split('/')[1] === 'projects'
                ? '#ffffff'
                : '#ffffff85'
            }
            textStyle={'title4'}
            cursor={'pointer'}
            _hover={{ color: '#ffffff' }}
            transition={'all 0.3s ease'}
          >
            {/* // todo change the font weight for title-4, it looks heavy in the design ( confirm from designer )*/}
            Projects
          </Box>
        </Link>
        <Link href="/events" passHref>
          <Box
            as="p"
            color={
              router.pathname.split('/')[1] === 'events'
                ? '#ffffff'
                : '#ffffff85'
            }
            textStyle={'title4'}
            cursor={'pointer'}
            _hover={{ color: '#ffffff' }}
            transition={'all 0.3s ease'}
          >
            Events
          </Box>
        </Link>
        <Link href="/blog" passHref>
          <Box
            as="p"
            color={
              router.pathname.split('/')[1] === 'blog' ? '#ffffff' : '#ffffff85'
            }
            textStyle={'title4'}
            cursor={'pointer'}
            _hover={{ color: '#ffffff' }}
            transition={'all 0.3s ease'}
          >
            Blog
          </Box>
        </Link>
      </HStack>
    );
  };

  return (
    <Container
      zIndex="9"
      maxW={'full'}
      position="fixed"
      p="0"
      bg="transparent"
      sx={{
        backdropFilter: 'blur(10px)',
        margin: '0px !important',
        marginTop: '0px !important',
      }}
    >
      <Flex
        mx="auto"
        maxW="7xl"
        alignItems={'center'}
        justifyContent={'space-between'}
        py={{ base: '0.6rem', md: '1.5rem' }}
        px="1.5rem"
      >
        <Box as="button" fontSize={'5xl'} onClick={() => router.push('/')}>
          <Logo />
        </Box>
        {isSmallerThan800 ? (
          <Hamburger
            toggled={isOpen}
            toggle={onToggle}
            size={25}
            duration={0.4}
            color="white"
            hideOutline
            rounded
          />
        ) : (
          <>
            <NavItems />
            <Flex h="2.4rem" w="9rem" justify={'end'}>
              {children}
            </Flex>
          </>
        )}
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Flex
          display={{ base: 'flex', lg: 'none' }}
          flexDirection="column"
          alignItems="start"
          fontSize="18px"
          p="1rem 2.5rem 2rem 2.5rem"
          gap="1.4rem"
        >
          <Link href="/profile" style={{ width: '100%' }} passHref>
            <Flex
              direction={'row'}
              alignItems="center"
              justify={'space-between'}
              w="100%"
              // pb='1rem'
              // borderBottom='0.1px solid white'
            >
              <Box
                display="flex"
                alignItems={'start'}
                w="100%"
                onClick={() => onToggle()}
                as="button"
                transition={'all 0.3s ease'}
                fontSize="15px"
                fontWeight="400"
              >
                Profile
              </Box>
            </Flex>
          </Link>
          <Link href="/projects" style={{ width: '100%' }} passHref>
            <Flex
              direction={'row'}
              alignItems="center"
              justify={'space-between'}
              w="100%"
              // pb='1rem'
              // borderBottom='0.1px solid white'
            >
              <Box
                display="flex"
                alignItems={'start'}
                w="100%"
                onClick={() => onToggle()}
                as="button"
                transition={'all 0.3s ease'}
                fontSize="15px"
                fontWeight="400"
              >
                Projects
              </Box>
            </Flex>
          </Link>
          <Link href="/events" style={{ width: '100%' }} passHref>
            <Flex
              direction={'row'}
              alignItems="center"
              justify={'space-between'}
              w="100%"
            >
              <Box
                display="flex"
                alignItems={'start'}
                w="100%"
                onClick={() => onClose()}
                as="button"
                transition={'all 0.3s ease'}
                fontSize="15px"
                fontWeight="400"
              >
                Events
              </Box>
            </Flex>
          </Link>
          <Link href="/blog" style={{ width: '100%' }} passHref>
            <Flex
              direction={'row'}
              alignItems="center"
              justify={'space-between'}
              w="100%"
            >
              <Box
                display="flex"
                alignItems={'start'}
                w="100%"
                onClick={() => onClose()}
                as="button"
                transition={'all 0.3s ease'}
                fontSize="15px"
                fontWeight="400"
              >
                Blog
              </Box>
            </Flex>
          </Link>
        </Flex>
      </Collapse>
    </Container>
  );
});

export default Navbar;
