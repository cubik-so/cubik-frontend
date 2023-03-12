import { Center, HStack, Text, useMediaQuery } from '@chakra-ui/react';
import React, { useState } from 'react';

const GlareButton = ({
  children,
  name,
  clickHandler,
}: {
  children: any;
  name: any;
  clickHandler: () => void;
}) => {
  const [glarePosition, setGlarePosition] = useState({
    x: 100,
    y: -50,
    scale: 0,
  });
  const handleMouseMove = (event: {
    preventDefault: () => void;
    nativeEvent: { offsetX: any; offsetY: any };
  }) => {
    event.preventDefault();
    setGlarePosition({
      x: event.nativeEvent.offsetX,
      y: event.nativeEvent.offsetY,
      scale: 1,
    });
  };
  return (
    <HStack
      onMouseOutCapture={() => {
        setGlarePosition({
          x: glarePosition.x,
          y: glarePosition.y,
          scale: 0,
        });
      }}
      onClick={clickHandler}
      onMouseMove={handleMouseMove}
      as="button"
      w="full"
      align={'center'}
      justify="center"
      rounded="6px"
      height={{ base: '2.5rem', md: '2.5rem' }}
      gap="0.2rem"
      position={'relative'}
      background="#222222"
      overflow={'hidden'}
      _before={{
        content: `" "`,
        zIndex: '1',
        position: 'absolute',
        top: `${glarePosition.y}px`,
        left: `${glarePosition.x}px`,
        overflow: 'hidden',
        width: `${glarePosition.scale * 1.2}rem`,
        height: `${glarePosition.scale * 1.2}rem`,
        filter: 'blur(25px)',
        WebkitBackdropFilter: 'blur(25pxx)',
        backgroundColor: 'rgba(225, 225, 225, 1);',
      }}
    >
      <Center zIndex={'0'}>{children}</Center>

      <Text
        lineHeight="1px"
        zIndex={'0'}
        color="#A6A6A6"
        fontWeight={'500'}
        fontSize="lg"
      >
        {name}
      </Text>
    </HStack>
  );
};

export default GlareButton;
