import { projectType } from '@/interfaces/project';
import { Avatar, Box, HStack, Stack, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { TruncatedAddr } from 'src/components/Wallet/WalletAdd';
import { IUser } from 'src/store/userStore';
import { ProjectsDonation } from './ProjectComponents/Donations';

const ProjectOwners = ({ projectOwners }: { projectOwners: IUser }) => {
  const router = useRouter();
  return (
    <HStack
      w="full"
      pt="0.3rem"
      onClick={() => {
        router.push({
          pathname: '/[username]',
          query: { username: projectOwners.username },
        });
      }}
      justifyContent={'space-between'}
    >
      <HStack gap="0.6rem">
        <Avatar size={{ base: 'sm', md: 'sm' }} src={projectOwners.icon} />
        <Box color={'white'} as="p" textStyle={'body3'}>
          @{projectOwners.username}
        </Box>
      </HStack>
      {projectOwners.mainwallet && (
        <Box color="#B4B0B2" as="p" textStyle={'body4'}>
          {TruncatedAddr({ walletAddress: projectOwners.mainwallet })}
        </Box>
      )}
    </HStack>
  );
};

const SimilarProject = () => {
  return (
    <VStack align={'start'} w="full" py="2rem" gap="1rem" color="#CBCBCB">
      <HStack gap="0.5rem" align={'start'}>
        <Avatar
          size="md"
          src="https://pbs.twimg.com/profile_images/1536479364657086464/0J5Nw811_400x400.jpg"
        />
        <VStack alignItems={'start'} textAlign="start">
          <Box as="p" textStyle={'title4'} color="white">
            Solarplex
          </Box>
          <Box as="p" color="#B4B0B2" textStyle={'body5'}>
            Product Hunt for Solana Blockchain.
          </Box>
        </VStack>
      </HStack>
      <HStack gap="0.5rem" align={'start'}>
        <Avatar
          size="md"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCOMVpOC5XXMwOU6RtVD8zvHxObLbk38Jfrtc0SbMC2w&s"
        />
        <VStack alignItems={'start'} textAlign="start">
          <Box as="p" textStyle={'title4'} color="white">
            Superteam Earn
          </Box>
          <Box as="p" color="#B4B0B2" textStyle={'body5'}>
            Build your Web3 reputation through Solana bounties, grants, and
            jobs.
          </Box>
        </VStack>
      </HStack>
      <HStack gap="0.5rem" align={'start'}>
        <Avatar size="md" src="https://i.ibb.co/G2bNtMP/blob.jpg" />
        <VStack alignItems={'start'} textAlign="start">
          <Box as="p" textStyle={'title4'} color="white">
            XRay
          </Box>
          <Box as="p" color="#B4B0B2" textStyle={'body5'}>
            On a mission to make Solana the most human-readable blockchain.
          </Box>
        </VStack>
      </HStack>
    </VStack>
  );
};

// sidebar
const SideBar = ({ projectDetails }: { projectDetails: projectType }) => {
  return (
    <Stack
      justify={'space-between'}
      direction={{ base: 'row', sm: 'row', md: 'column' }}
      gap="2rem"
      pt="3rem"
      justifyContent={'start'}
      right="20rem"
    >
      <Box w={{ base: 'auto', sm: 'auto', md: 'full' }}>
        <Box as="p" textStyle={'title3'}>
          Projects Creator
        </Box>
        <VStack w="full" py="1rem" color="#CBCBCB">
          <ProjectOwners projectOwners={projectDetails.owner} />
        </VStack>
      </Box>
      <Box height="2px" backgroundColor="#1A1A1A" w="full" />
      <Box w={{ base: 'auto', sm: 'auto', md: 'full' }}>
        <Box as="p" textStyle={'title3'}>
          Similar Projects
        </Box>
        <SimilarProject />
      </Box>
    </Stack>
  );
};

// section 2
export const ProjectInteractions = ({
  projectDetails,
}: {
  projectDetails: projectType;
}) => {
  return (
    <Stack
      mx="auto"
      w="full"
      flex="1"
      maxW="6xl"
      gap={{ base: '1rem', md: '4rem' }}
      p={{ base: '0rem', sm: '1rem', md: '1rem', lg: '1rem' }}
      display={'flex'}
      flexDir={{ base: 'column', md: 'column' }}
      justifyContent="start"
    >
      <ProjectsDonation projectDetails={projectDetails} />
      <SideBar projectDetails={projectDetails} />
    </Stack>
  );
};
