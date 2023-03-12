import {
  Button,
  Center,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';

type PropsType = {
  children: React.ReactElement;
  name: string;
  available: boolean;
  about: string;
  description: string;
};

const BadgeCard = ({
  children,
  name,
  available,
  about,
  description,
}: PropsType) => {
  return (
    <HStack
      opacity={available ? '1' : '0.5'}
      align={'start'}
      border={'0.5px solid #222222'}
      bg="#070707"
      borderRadius="4px"
      p="1.2rem"
      gap="0.3rem"
    >
      <Center w="2rem" h="2rem" bg="#151515" rounded="full" p="0.4rem">
        {children}
      </Center>
      <VStack gap="0.6rem" align={'start'}>
        <VStack gap="0" spacing="0" w="full" align={'start'}>
          <HStack w="full" justify={'space-between'}>
            <Heading fontSize={'16px'}>{name}</Heading>
            <Button
              bg={available ? '#0D2614' : '#232323'}
              color={available ? '#74FF9B' : '#9D9D9D'}
              p="0.4rem 0.6rem"
              fontSize={'10px'}
            >
              {available ? 'Collected' : 'Claim'}
            </Button>
          </HStack>
          <Text color="#9D9D9D" fontSize={'12px'}>
            {about}
          </Text>
        </VStack>
        <Text color="#9D9D9D" pb="0.2rem" maxW="11rem" fontSize={'12px'}>
          {description}
        </Text>
      </VStack>
    </HStack>
  );
};

export default BadgeCard;
