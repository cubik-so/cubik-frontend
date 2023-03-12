import {
  Avatar as ChakraAvatar,
  Box,
  Container,
  HStack,
  VStack,
} from '@chakra-ui/react';
import Avatar from 'boring-avatars';
import { useRouter } from 'next/router';
import WalletAdd from 'src/components/Wallet/WalletAdd';
import { IUser, useUserStore } from 'src/store/userStore';
import ProfileTabs from './ProfileTabs';
interface Props {
  user: IUser;
  loading: boolean;
}

const UserDetailsCard = ({ user, loading }: Props) => {
  // const { user } = useUser();
  return (
    <HStack
      w="full"
      align={'start'}
      justify="start"
      gap={{ base: '0.4rem', md: '1rem' }}
    >
      {user.icon ? (
        <ChakraAvatar
          border="3px solid #FFFFFF20"
          src={user.icon}
          name={user.username}
          width="80px"
          height="80px"
        />
      ) : (
        <Avatar
          size={70}
          name={user.username}
          variant="pixel"
          colors={['#92A1C6', '#F0AB3D', '#C271B4', '#C20D90']}
        />
      )}
      {/* show edit actions if this code is true - {userStore.user?.username === query.username && */}
      <VStack h="full" justifyContent={'center'} alignItems={'start'}>
        <Box as="p" textStyle={'title1'}>
          @ {user.username}
        </Box>
        {/* @ts-ignore */}
        <WalletAdd walletAddress={user.mainwallet} size="sm" copy={true} />
      </VStack>
    </HStack>
  );
};

const UserProfile = ({ loading, user }: any) => {
  const { query } = useRouter();
  const userStore = useUserStore();
  return (
    <Container maxW="full" p="0" my="2.5rem">
      <UserDetailsCard user={user as IUser} loading={!loading} />
      <ProfileTabs />
    </Container>
  );
};

export default UserProfile;
