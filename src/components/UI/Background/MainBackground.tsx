import { Center } from '@chakra-ui/react';
import React from 'react';
import Background from 'src/components/Layouts/Background';

const MainBackground = () => {
  return (
    <Center position={'absolute'} w="100vw" zIndex={'0'}>
      <Background />
    </Center>
  );
};

export default MainBackground;
