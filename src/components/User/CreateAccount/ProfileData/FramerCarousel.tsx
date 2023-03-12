import { Box, Button, Center, HStack, Text, VStack } from '@chakra-ui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { motion } from 'framer-motion';
import { memo, useEffect, useRef, useState } from 'react';
import { useUserStore } from 'src/store/userStore';
import Carousel from './Carousel';
import { GetNftFromMetaData } from './getNFTFromMetaData';
import { metaplexGetByOwner } from './metaplexGetByOwner';

type CarouselPropsType = {
  onClose: () => void;
};

const FramerCarousel = memo(function FramerCarousel({
  onClose,
}: CarouselPropsType) {
  const { user } = useUserStore();
  const { publicKey } = useWallet();
  const [nftsData, setNftsData] = useState<any>();
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carousel = useRef<HTMLElement>();

  useEffect(() => {
    if (carousel.current) {
      setCarouselWidth(
        carousel.current.scrollWidth - carousel.current.offsetWidth
      );
    }
  }, [carouselWidth, nftsData]);

  useEffect(() => {
    try {
      metaplexGetByOwner(publicKey).then((nfts) => {
        if (nfts && nfts.length > 0) {
          GetNftFromMetaData({ NFTMetadataURIs: nfts })
            .then(async (nftsData) => {
              setNftsData(nftsData);
            })
            .catch((e) => {
              //console.log('error in return value - ', e);
            });
        } else {
          //console.log('metaPlexGetByOwner returned empty array');
        }
      });
    } catch (e) {
      // console.log('error in useEffect');
    }
  }, [publicKey]);

  return (
    <>
      <HStack w="full" justify={'space-between'}>
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
      {/* carousel here */}
      {/* <ChakraBox animation={animation} /> */}
      <Box
        alignItems={'center'}
        position={'relative'}
        overflow="visible"
        // @ts-ignore
        ref={carousel}
        as={motion.div}
      >
        {nftsData?.length > 0 ? (
          <Carousel carouselWidth={carouselWidth} nftsData={nftsData} />
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
            <Center pb="0.5rem">{/* <CiImageOn size="26px" /> */}</Center>
            <Text fontSize="xs" maxW="8rem" textAlign={'center'}>
              You do not have NFTs in your wallet.
            </Text>
          </VStack>
        )}
      </Box>
    </>
  );
});

export default FramerCarousel;
