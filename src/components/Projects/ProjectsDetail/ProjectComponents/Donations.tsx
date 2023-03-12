import { projectType } from '@/interfaces/project';
import {
  Avatar,
  Button,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
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
  const projectAdd = 'FfZ2TQs8wVjhhytayFqmmckdUNbSxuEcp1oG5LxSmFbV';
  return (
    <>
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
                name={projectDetails.name}
              />
              <VStack gap="0" spacing="0" alignItems={'start'} justify="center">
                <Heading color="white" fontSize={{ base: 'md', md: 'xl' }}>
                  {projectDetails.name}
                </Heading>

                <WalletAdd
                  walletAddress={projectAdd}
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
        position={'fixed'}
        right="20rem"
        w={{ base: 'auto', sm: 'auto', md: '18rem' }}
        //width={{ base: 'auto', lg: '9rem' }}
        alignItems={{ base: 'center', md: 'start' }}
      >
        <VStack gap="0" spacing="0" alignItems={'start'} pb="0.5rem">
          <Heading fontSize={{ base: '2xl', md: '4xl' }}>
            {/* {formatNumberWithK(projectDetails.total_funding_raised)} */}$
            {!localStorage.getItem('amount-con') ? '0' : '0.002'}
          </Heading>
          <Text color="#CBCBCB" fontSize={{ base: 'xs', md: 'sm' }}>
            Funding Raised
          </Text>
        </VStack>
        <Button onClick={onOpen} rounded="full" w="10rem">
          Contribute
        </Button>
      </VStack>
    </>
  );
};
