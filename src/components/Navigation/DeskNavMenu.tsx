import { Button } from '@chakra-ui/button';
import { HStack, Text, VStack } from '@chakra-ui/layout';
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/menu';
import { Avatar } from '@chakra-ui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useRouter } from 'next/router';
import { BiChevronDown } from 'react-icons/bi';
import { AuthState, useAuthStore } from 'src/store/authStore';
import { useUserStore } from 'src/store/userStore';
import WalletAdd from '../Wallet/WalletAdd';

const DeskNavMenu = () => {
  const { disconnect, publicKey } = useWallet();
  const { user, setUser } = useUserStore();
  const router = useRouter();
  const { setAuthenticationState } = useAuthStore();

  function handleSignOut() {
    setUser(null);
    disconnect();
    setAuthenticationState(AuthState.NOT_AUTHENTICATED);
  }

  if (!user?.username) return <>no username</>;

  return (
    <>
      <HStack gap="0.5rem">
        <Menu>
          <MenuButton
            backgroundColor={'transparent'}
            _hover={{
              backgroundColor: 'transparent',
            }}
            _active={{
              backgroundColor: 'transparent',
            }}
            _focus={{
              backgroundColor: 'transparent',
            }}
            as={Button}
            rightIcon={<BiChevronDown />}
            color="white"
            fontSize={'md'}
            //todo: set max width to prevent overflow of text
          >
            {user?.username}
          </MenuButton>
          <MenuList bg="#121212" border="1px solid #222222">
            <HStack p="0.5rem 1rem" gap="0.5rem">
              <Avatar size={'sm'} src={user?.icon} />
              <VStack
                alignItems={'start'}
                justify="center"
                w="full"
                spacing="0"
              >
                <Text fontSize="md">{user?.username}</Text>
                <WalletAdd
                  // @ts-ignore
                  walletAddress={user.mainwallet}
                  size="xs"
                  copy={true}
                />
              </VStack>
            </HStack>
            <MenuDivider />
            <MenuItem
              mx="0.5rem"
              bg="transparent"
              rounded="md"
              onClick={() => {
                console.log('pushing to profile');
                router.push({
                  pathname: '/create-project',
                });
              }}
              sx={{
                width: '-webkit-fill-available',
              }}
              _hover={{
                backgroundColor: '#262626',
              }}
              _active={{
                backgroundColor: '#262626',
              }}
            >
              Create Project
            </MenuItem>
            <MenuItem
              mx="0.5rem"
              bg="transparent"
              rounded="md"
              onClick={() => {
                console.log('pushing to profile');
                router.push({
                  pathname: '/[username]',
                  query: { username: user?.username },
                });
              }}
              sx={{
                width: '-webkit-fill-available',
              }}
              _hover={{
                backgroundColor: '#262626',
              }}
              _active={{
                backgroundColor: '#262626',
              }}
            >
              View Profile
            </MenuItem>
            <MenuItem
              mx="0.5rem"
              bg="transparent"
              rounded="md"
              sx={{
                width: '-webkit-fill-available',
              }}
              _hover={{
                backgroundColor: '#262626',
              }}
              _active={{
                backgroundColor: '#262626',
              }}
            >
              Projects
            </MenuItem>
            <MenuItem
              mx="0.5rem"
              bg="transparent"
              rounded="md"
              sx={{
                width: '-webkit-fill-available',
              }}
              _hover={{
                backgroundColor: '#262626',
              }}
              _active={{
                backgroundColor: '#262626',
              }}
            >
              Funding Rounds
            </MenuItem>
            <MenuItem
              mx="0.5rem"
              bg="transparent"
              rounded="md"
              sx={{
                width: '-webkit-fill-available',
              }}
              _hover={{
                backgroundColor: '#262626',
              }}
              _active={{
                backgroundColor: '#262626',
              }}
              as="button"
              onClick={handleSignOut}
            >
              Sign out
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </>
  );
};

export default DeskNavMenu;
