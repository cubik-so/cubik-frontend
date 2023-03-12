import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { memo, useState } from 'react';
import { useUserStore } from 'src/store/userStore';

const Carousel = memo(function Carousel({
  carouselWidth,
  nftsData,
}: {
  carouselWidth: number;
  nftsData: any;
}) {
  const { setUser, user } = useUserStore();
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  // handler for when user stops dragging
  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <Box
      display={'flex'}
      flexDir="row"
      gap="0.5rem"
      py="1rem"
      dragConstraints={{ right: 0, left: -carouselWidth }}
      drag="x"
      w="fit-content"
      cursor="grab"
      //border="1px solid red"
      //overflow="visible"
      alignItems="start"
      justifyContent="flex-start"
      as={motion.div}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {nftsData
        ? nftsData.map((nft: any) => (
            <Box
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              rounded="6px"
              minW="5rem"
              minH="5rem"
              as={motion.div}
              key={nft.image}
              _hover={{
                //cursor: 'pointer',
                outline: '1px solid #fff',
              }}
              onClick={() => {
                if (!isDragging) {
                  setUser({ icon: nft.image });
                }
              }}
              pointerEvents={isDragging ? 'none' : 'all'}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={nft.image}
                alt={nft.image}
                loading="lazy"
                style={{
                  outline: user?.icon === nft.image ? '1px solid #fff' : 'none',
                  pointerEvents: 'none',
                  // border: '1px solid red',
                  borderRadius: '6px',
                  width: '5rem',
                  height: '5rem',
                  objectFit: 'cover',
                }}
              />
            </Box>
          ))
        : 'no data'}
    </Box>
  );
});

export default Carousel;
