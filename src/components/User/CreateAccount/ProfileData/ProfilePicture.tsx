import { Avatar as ChakraAvatar, Center } from '@chakra-ui/react';
import Avatar from 'boring-avatars';
import { BiUpArrowAlt } from 'react-icons/bi';
import { IUser } from 'src/store/userStore';

const ProfilePicture = ({
  user,
  onOpen,
}: {
  user: IUser | undefined;
  onOpen: () => void;
}) => {
  return (
    <Center
      w="fit-content"
      transform={{ base: 'scale(0.9)', md: 'scale(1)' }}
      position="relative"
    >
      <Center
        cursor={'pointer'}
        onClick={onOpen}
        position={'absolute'}
        bottom="2px"
        right="2px"
        rounded="full"
        bg="white"
        p="0.1rem"
        zIndex={'10'}
      >
        <BiUpArrowAlt color="black" />
      </Center>
      {!user?.icon ? (
        <Avatar
          size={84}
          name={user?.username as string}
          variant="marble"
          colors={[
            '#05299E',
            '#5E4AE3',
            '#947BD3',
            '#F0A7A0',
            '#F26CA7',
            '#FFFFFF',
            '#CAF0F8',
            '#CCA43B',
          ]}
        />
      ) : (
        <ChakraAvatar src={user.icon} width="84px" height="84px" />
      )}
    </Center>
  );
};

export default ProfilePicture;
