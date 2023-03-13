import { projectType } from '@/interfaces/project';
import {
  Avatar,
  Box,
  Button,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import VoteModalBody from 'src/components/Vote/VoteModal';
import WalletAdd from '../../../Wallet/WalletAdd';
// section 1 part 2
export const ProjectsDonation = ({
  projectDetails,
}: {
  projectDetails: projectType;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          mx={{ base: '2rem', md: 'none' }}
          rounded="8px"
          backgroundColor="#1D1D1D"
        >
          <ModalHeader>
            <HStack gap="0.4rem">
              <Avatar
                size={{ base: 'sm', md: 'md' }}
                src={projectDetails.logo}
                name={projectDetails.project_name}
              />
              <VStack gap="0" spacing="0" alignItems={'start'} justify="center">
                <Heading color="white" fontSize={{ base: 'md', md: 'xl' }}>
                  {projectDetails.project_name}
                </Heading>

                <WalletAdd
                  walletAddress={projectDetails.owner_publickey}
                  size="xs"
                  copy={true}
                  color="#E2DBDB"
                />
              </VStack>
            </HStack>
          </ModalHeader>
          <ModalCloseButton
            _hover={{
              background: 'none',
            }}
            transform={{ base: 'scale(0.8)', md: 'none' }}
            size={{ base: '0.4rem', md: '1rem' }}
            m="1.3rem 0.6rem"
            color={'#999999'}
          />
          <ModalBody roundedBottom={'8px'} backgroundColor={'#141414'}>
            <VoteModalBody />
          </ModalBody>
        </ModalContent>
      </Modal>
      <VStack
        ml="auto"
        right="20rem"
        w={'fit-content'}
        alignItems={{ base: 'center', md: 'start' }}
      >
        <VStack align={'end'} gap="0" spacing="0" pb="0.5rem">
          <Box as="p" textStyle="display3">
            {/* {formatNumberWithK(projectDetails.total_funding_raised)} */}$
            {!localStorage.getItem('amount-con') ? '0' : '0.002'}
          </Box>
          <Box as="p" textStyle="body2" color="#B2B2B2">
            Funding Raised
          </Box>
        </VStack>
        <Button
          onClick={onOpen}
          backgroundColor="#D645A6"
          rounded="full"
          w="10rem"
        >
          <Box
            as="p"
            textStyle={'title4'}
            color="white"
            textShadow={'md'}
            _hover={{ color: '#D645A6' }}
          >
            Contribute
          </Box>
        </Button>
      </VStack>
    </Box>
  );
};
