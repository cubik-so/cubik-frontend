// @ts-nocheck
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Select } from 'chakra-react-select';
import { Controller, useForm } from 'react-hook-form';
import { createProject } from 'src/lib/api/projectsHelper';

const Industry = [
  {
    label: 'NFT',
    value: 'nft',
    colorScheme: 'red',
  },
  {
    label: 'DeFi',
    value: 'defi',
    colorScheme: 'yellow',
  },
  {
    label: 'Infrastructure',
    value: 'infrastructure',
    colorScheme: 'blue',
  },
  {
    label: 'SDK',
    value: 'sdk',
    colorScheme: 'black',
  },
  {
    label: 'Wallet',
    value: 'wallet',
    colorScheme: 'orange',
  },
  {
    label: 'DAO',
    value: 'dao',
    colorScheme: 'white',
  },
  {
    label: 'Analytics',
    value: 'analytics',
    colorScheme: 'purple',
  },
  {
    label: 'dAPP',
    value: 'dapp',
    colorScheme: 'yellow',
  },
  {
    label: 'Oracles',
    value: 'oracles',
    colorScheme: 'pink',
  },
  {
    label: 'SPL',
    value: 'spl',
    colorScheme: 'blue',
  },
  {
    label: 'Tools',
    value: 'tool',
    colorScheme: 'green',
  },
];

const CreateProject = () => {
  const { publicKey } = useWallet();

  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values: any) {
    console.log('submitted values', values);
    // send a request to this route and submit project
    // /project/create
    createProject({
      project_name: values.project_name,
      owner_publickey: publicKey?.toBase58(),
      long_description: values.long_description,
      short_description: values.short_description,
      logo: values.logo,
      industry: values.industry,
      twitter: values.twitter,
      github: values.github,
      discord: values.discord,
    }).then((res) => {
      console.log('project create response - ', res);
    });
  }
  return (
    <Container
      py={{ base: '1rem', md: '4rem' }}
      px="0"
      maxW="full"
      minH="80vh"
      h="full"
    >
      <VStack
        maxW={{ base: '18rem', sm: '30rem', md: '30rem' }}
        mx="auto"
        textAlign={'center'}
        _before={{
          zIndex: '-1',
          content: `" "`,
          position: 'absolute',
          top: `1%`,
          left: `50%`,
          overflow: 'hidden',
          width: '6rem',
          height: '6rem',
          transform: 'translate(-50%, 50%)',
          filter: 'blur(120px)',
          WebkitBackdropFilter: 'blur(0px)',
          WebkitFilter: 'blur(120px)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
        }}
      >
        <Heading fontSize={{ base: '2xl', md: '3xl' }}>
          Create New Project
        </Heading>
        <Text color="#C5C5C5" fontSize={{ base: 'xs', md: 'sm' }}>
          We are excited to share about your new project. Create a project and
          start receiving public donations and grants in a decentralised way.
        </Text>
        <VStack
          w={{ base: '85vw', sm: '60vw', md: '100%' }}
          maxW={{ base: '20rem', sm: '20rem', md: '100rem' }}
          p={{ base: '1.4rem 0rem', md: '2rem 0rem' }}
          _before={{
            zIndex: '-1',
            content: `" "`,
            position: 'absolute',
            //top: `1%`,
            //left: `50%`,
            overflow: 'hidden',
            width: '6rem',
            height: '6rem',
            transform: 'translate(-4rem, -2rem)',
            filter: 'blur(120px)',
            WebkitBackdropFilter: 'blur(0px)',
            WebkitFilter: 'blur(120px)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
          }}
          gap="0.4rem"
        >
          <form
            style={{ width: '100%', padding: '0', margin: '0' }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <VStack gap="1rem">
              <HStack w="full">
                <FormControl isRequired isInvalid={errors.name}>
                  <FormLabel htmlFor="name">Project name</FormLabel>
                  <Input
                    id="project_name"
                    // placeholder="Project Name"
                    {...register('project_name', {
                      required: 'This is required',
                      minLength: {
                        value: 4,
                        message: 'Minimum length should be 4',
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.project_name && errors.project_name.message}
                  </FormErrorMessage>
                </FormControl>{' '}
                <FormControl isRequired isInvalid={errors.name}>
                  <FormLabel htmlFor="name">Website Link</FormLabel>
                  <Input
                    id="project_link"
                    //   placeholder="Website Link"
                    {...register('project_link', {
                      required: 'This is required',
                      minLength: {
                        value: 4,
                        message: 'Minimum length should be 5',
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.name && errors.name.message}
                  </FormErrorMessage>
                </FormControl>
              </HStack>{' '}
              <FormControl isRequired isInvalid={errors.name}>
                <FormLabel htmlFor="logo">Logo</FormLabel>
                <Input
                  id="logo"
                  {...register('logo', {
                    required: 'This is required',
                    minLength: {
                      value: 4,
                      message: 'Minimum length should be 5',
                    },
                  })}
                />

                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
              <Controller
                control={control}
                name="industry"
                rules={{ required: 'Please enter at least Tag.' }}
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { error },
                }) => (
                  <FormControl py={4} isInvalid={!!error} id="industry">
                    <FormLabel>Category Tags</FormLabel>
                    <Select
                      isMulti
                      name={name}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      options={Industry}
                      //placeholder="Industry"
                      closeMenuOnSelect={false}
                      chakraStyles={{
                        dropdownIndicator: (provided, state) => ({
                          ...provided,
                          background: '#141414',
                          borderColor: 'transparent !important',
                          outline: '0px !important',
                          boxShadow: '0',
                          p: 0,
                          w: '40px',
                        }),
                        indicatorSeparator: (provided, state) => ({
                          ...provided,
                          display: 'none',
                        }),
                        menu: (provided, state) => ({
                          ...provided,
                          border: 'none',
                          backgroundColor: '#141414',
                        }),
                        menuList: (provided, state) => ({
                          ...provided,
                          border: 'none',
                        }),
                        placeholder: (provided, state) => ({
                          ...provided,
                          textAlign: 'start',
                        }),
                      }}
                    />

                    <FormErrorMessage>
                      {error && error.message}
                    </FormErrorMessage>
                  </FormControl>
                )}
              />
              <FormControl isInvalid={errors.name}>
                <FormLabel>Short Description</FormLabel>
                <Input
                  id="short_description"
                  {...register('short_description', {
                    required: 'This is required',
                    minLength: {
                      value: 10,
                      message: 'Minimum length should be 10',
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="twitter">Twitter</FormLabel>
                <Input type="url" id="twitter" {...register('twitter')} />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="github">Github</FormLabel>
                <Input type="url" id="github" {...register('github')} />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="discord">Discord</FormLabel>
                <Input type={'url'} id="discord" {...register('discord')} />
              </FormControl>
              <FormControl>
                <FormLabel>Detailed Description</FormLabel>
                <Input
                  id="long_description"
                  {...register('long_description')}
                />
              </FormControl>
              <Button
                mt={4}
                w="full"
                colorScheme="teal"
                isLoading={isSubmitting}
                type="submit"
              >
                Submit
              </Button>
            </VStack>
          </form>
        </VStack>
      </VStack>
    </Container>
  );
};

export default CreateProject;
