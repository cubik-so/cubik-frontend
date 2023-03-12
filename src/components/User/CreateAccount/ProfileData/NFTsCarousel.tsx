import { Box, Button, Center, HStack, Text, VStack } from '@chakra-ui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { memo, useEffect, useState } from 'react';
import { CiImageOn } from 'react-icons/ci';
import { useUserStore } from 'src/store/userStore';
import { metaplexGetByOwner } from './metaplexGetByOwner';
import NFTsSlider from './NFTsSlider';

type CarouselPropsType = {
  onClose: () => void;
};

const NFTCarousel = memo(function NFTCarousel({ onClose }: CarouselPropsType) {
  const { user } = useUserStore();
  const { publicKey } = useWallet();
  const [NFTsMetadataURIs, setNFTsMetadataURIs] = useState<string[]>();

  useEffect(() => {
    const getNFTsMetadataURIs = async () => {
      const data = await metaplexGetByOwner(publicKey);
      setNFTsMetadataURIs(data);
    };
    getNFTsMetadataURIs();
  }, [publicKey]);

  return (
    <>
      <HStack alignItems={'center'} w="full" justify={'space-between'}>
        <Text textAlign={'center'} fontSize={{ base: 'xs', md: 'sm' }}>
          Select NFT
        </Text>
        <Button
          fontSize={{ base: 'xs', md: 'sm' }}
          fontWeight="400"
          bg="white"
          color="black"
          rounded="full"
          variant="none"
          p="0.3rem 0.8rem"
          size="8px"
          onClick={() => {
            if (user?.icon) {
              // set this to the database
              onClose();
            } else {
              onClose();
            }
          }}
        >
          {user?.icon ? 'Select' : 'Cancel'}
        </Button>
      </HStack>
      {NFTsMetadataURIs?.length ? (
        <Box
          my="0.3rem"
          width="100%"
          height={'7rem'}
          py="0.5rem"
          overflow={'visible'}
        >
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          {NFTsMetadataURIs && (
            <NFTsSlider NFTMetadataURIs={NFTsMetadataURIs} />
          )}
        </Box>
      ) : (
        <VStack
          my="0.6rem"
          rounded="4px"
          border="1px solid #242424"
          bg="#141414"
          width="100%"
          height="7rem"
          // bg="gray.500"
          align={'center'}
          gap="0"
          spacing="0"
          py="1.2rem"
        >
          <Center pb="0.5rem">
            <CiImageOn size="26px" />
          </Center>
          <Text fontSize="xs" maxW="8rem" textAlign={'center'}>
            You do not have NFTs in your wallet.
          </Text>
        </VStack>
      )}
    </>
  );
});

export default NFTCarousel;
