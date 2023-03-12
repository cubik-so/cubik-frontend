import { VStack } from '@chakra-ui/react';
import CreateProfileForm from './ProfileData/CreateProfileForm';

const CreateNewProfile = () => {
  return (
    <VStack
      w="full"
      align={'start'}
      p={{ base: '1.5rem 0.5rem', md: '2rem 1rem' }}
      justify="start"
      rounded="12px"
      background="#0E0E0E"
    >
      <CreateProfileForm />
    </VStack>
  );
};

export default CreateNewProfile;
