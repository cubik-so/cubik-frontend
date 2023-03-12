import { ChildInterface } from '@/interfaces/children';
import { Box, Button, Center, Container, Skeleton } from '@chakra-ui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { getUser, QUERY_TYPE } from 'src/lib/api/userHelper';
import { AuthState, useAuthStore } from 'src/store/authStore';
import { useAsPath } from 'src/store/pathStore';
import { useUserStore } from 'src/store/userStore';
import DeskNavMenu from '../Navigation/DeskNavMenu';
import Footer from '../Navigation/Footer';
import Navbar from '../Navigation/Navbar';
import WalletAdd from '../Wallet/WalletAdd';
import Loader from './Loader';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { setUser, user } = useUserStore();
  const { publicKey } = useWallet();
  const { setAuthenticationState } = useAuthStore();
  const { prevAsPath } = useAsPath();

  // protect routes from unauthenticated users
  useEffect(() => {
    // check for current route and auth status and redirect accordingly
  }, []);

  useEffect(() => {
    (async () => {
      if (publicKey) {
        setUser({ mainwallet: publicKey.toBase58() });
        console.log('🙁 user main wallet set check store');
        if (user?.id) return;
        try {
          setAuthenticationState(AuthState.LOADING);
          const fetchedUserFromServer = await getUser({
            type: QUERY_TYPE.PUBLIC_KEY,
            value: publicKey.toBase58(),
          });
          console.log('🍭 fetched user form server - ', fetchedUserFromServer);
          if (fetchedUserFromServer) {
            setUser({
              id: fetchedUserFromServer.id,
              username: fetchedUserFromServer.username,
              icon: fetchedUserFromServer.icon,
            });
            if (prevAsPath === '/') {
              router.push({
                pathname: '/[username]',
                query: { username: fetchedUserFromServer.username },
              });
            } else if (!prevAsPath) {
              router.push({
                pathname: '/[username]',
                query: { username: fetchedUserFromServer.username },
              });
            } else {
              router.push(prevAsPath);
            }
            setAuthenticationState(AuthState.AUTHENTICATED);
          } else {
            router.push('/connect-wallet/create-profile');
            setAuthenticationState(AuthState.NOT_AUTHENTICATED);
            // show a message wallet connected successfully
          }
        } catch (error) {
          setAuthenticationState(AuthState.NOT_AUTHENTICATED);
        }
      } else {
        //
      }
    })();
  }, [publicKey, setUser]);

  return <>{children}</>;
};

const HomeLayout = ({ children }: ChildInterface) => {
  const router = useRouter();
  const { authenticationState } = useAuthStore();
  const wallet = useWallet();
  const NavbarChild = () => {
    switch (router.pathname) {
      case '/connect-wallet':
        return (
          <Button
            as="a"
            href={'http://backpack.app/ref/irfan'}
            target="_blank"
            rightIcon={
              <MdKeyboardArrowRight
                size={18}
                style={{ transform: 'translateY(4px)' }}
              />
            }
            px="0.5rem"
            iconSpacing={'0.2rem'}
            variant={'unstyled'}
            height="fit-content"
            lineHeight={'20px'}
          >
            Get Wallet
          </Button>
        );
      case '/connect-wallet/create-profile':
        return (
          <Box as="button" onClick={wallet.disconnect}>
            {wallet.publicKey && (
              <WalletAdd
                walletAddress={wallet.publicKey?.toBase58()}
                color="white"
                size="sm"
              />
            )}
          </Box>
        );
      default:
        if (authenticationState === AuthState.NOT_AUTHENTICATED) {
          return (
            <Button
              padding={'12px 18px'}
              color="white"
              _hover={{ color: '' }}
              backgroundColor="rgba(255, 255, 255, 0.08)"
              border="1px solid rgba(255, 255, 255, 0.2)"
              rounded="full"
              onClick={() => router.push('/connect-wallet')}
            >
              Connect Wallet
            </Button>
          );
        } else {
          return (
            <Skeleton
              isLoaded={
                authenticationState === AuthState.AUTHENTICATED ? true : false
              }
              fadeDuration={1}
              rounded={'md'}
              w="full"
              height="full"
              startColor="#121219"
              endColor="#37383E"
            >
              <DeskNavMenu />
            </Skeleton>
          );
        }
    }
  };

  return (
    <AuthProvider>
      <Container minH="99vh" backgroundColor="#00010A" p="0" maxW={'full'}>
        <Loader />
        <Container
          p="0"
          py="4px"
          position={'absolute'}
          maxW={'full'}
          zIndex="999"
          minH="99vh"
        >
          <Navbar>
            <NavbarChild />
          </Navbar>
          <Container maxW="full" p="0" mt={{ base: '4.5rem', md: '5.5rem' }}>
            {children}
          </Container>
          <Center mt="full" w="full">
            <Footer />
          </Center>
        </Container>
      </Container>
    </AuthProvider>
  );
};

export default HomeLayout;
