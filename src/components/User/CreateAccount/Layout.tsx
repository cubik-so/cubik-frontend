import { Box, Container, Stack } from '@chakra-ui/react';
import React from 'react';

type PropsType = {
  children: JSX.Element[];
};

const CreateAccountLayout = (props: PropsType) => {
  return (
    <Container p="0" maxW="7xl">
      <Stack
        py={{ base: '0.8rem', md: '2rem' }}
        alignItems={'start'}
        justifyContent="center"
        gap="2rem"
        direction={{
          base: 'column',
          sm: 'column',
          md: 'row',
          lg: 'row',
          xl: 'row',
        }}
      >
        {props.children.map((Element, key) => {
          return (
            <Box
              p={{ base: '0rem', md: '1rem' }}
              w="full"
              maxW="30rem"
              key={key}
            >
              {Element}
            </Box>
          );
        })}
      </Stack>
    </Container>
  );
};

export default CreateAccountLayout;
