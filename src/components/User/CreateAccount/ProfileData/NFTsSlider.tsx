import {
  Center,
  IconButton,
  Image,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { memo, useEffect, useState } from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import { useUserStore } from 'src/store/userStore';
import { GetNftFromMetaData } from './getNFTFromMetaData';
//import { useFetchNFTs } from './useMetaplexGetByOwner';

type NFTData = Record<string, unknown>;

function NFTsSlider({ NFTMetadataURIs }: { NFTMetadataURIs?: string[] }) {
  const [slider, setSlider] = useState<Slider | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [nftsData, setNftsData] = useState<any[] | undefined>();
  const { user, setUser } = useUserStore();

  const top = useBreakpointValue({ base: '0%', md: '0%' });
  const side = useBreakpointValue({ base: '0px', md: '0px' });

  useEffect(() => {
    if (NFTMetadataURIs === undefined) {
      setNftsData(undefined);
      return;
    }
    GetNftFromMetaData({ NFTMetadataURIs })
      .then((nftsData) => {
        setNftsData(nftsData);
      })
      .catch((e) => {
        // console.log('error', e);
      });
  }, []);

  const PrevArrow = (props: any) => {
    return (
      <IconButton
        {...props}
        variant="ghost"
        //position="absolute"
        // left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        bg="white"
        color="black"
        w="20px"
        height="20px"
        minW="0"
        rounded="full"
        // onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="16px" />
      </IconButton>
    );
  };

  const NextArrow = (props: any) => {
    return (
      <IconButton
        {...props}
        // variant="ghost"
        position="absolute"
        // right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        bg="white"
        color="black"
        w="20px"
        height="20px"
        minW="0"
        rounded="full"
        //  onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="16px" />
      </IconButton>
    );
  };

  const settings = {
    dots: false,
    //lazyLoad: true,
    infinite: false,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 3,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return nftsData ? (
    <Slider {...settings} ref={(slider: any) => setSlider(slider)}>
      {nftsData ? (
        nftsData.map((nft, index) => (
          // <Skeleton key={index} isLoaded={loaded}>
          <Center
            onClick={() => setUser({ ...user, icon: nft.image })}
            cursor={'pointer'}
            key={index}
            width="6rem"
            height="6rem"
            overflow="hidden"
            border="2px solid transparent"
            ml="0rem"
            rounded={'8px'}
          >
            {/*  eslint-disable-next-line @next/next/no-img-element */}
            <Image
              src={nft.image}
              alt="NFT"
              sx={{
                width: '6rem',
                height: '6rem',
                objectFit: 'cover',
                objectPosition: 'center',
                borderRadius: '6px',
              }}
              onLoad={() => setLoaded(true)}
            />
          </Center>
          // </Skeleton>
        ))
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
    </Slider>
  ) : (
    <></>
  );
}

export default memo(NFTsSlider);
