import {
  Button,
  Center,
  Collapse,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  useDisclosure,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as anchor from '@project-serum/anchor';
import NodeWallet from '@project-serum/anchor/dist/cjs/nodewallet';
import { useAnchorWallet, useWallet } from '@solana/wallet-adapter-react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { HiCheck } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';
import WalletAdd from 'src/components/Wallet/WalletAdd';
import { getUserNameStatus } from 'src/lib/api/authHelper';
import { createUser } from 'src/lib/api/userHelper';
import { AuthState, useAuthStore } from 'src/store/authStore';
import { useUserStore } from 'src/store/userStore';
import { connection, UserIx } from 'src/utils/acnhorProgram';
import { v4 as uuidV4 } from 'uuid';
import * as yup from 'yup';
import FramerCarousel from './FramerCarousel';
import ProfilePicture from './ProfilePicture';
type FormValues = {
  username: string;
};

enum USERNAME_STATUS {
  AVAILABLE = 'available',
  NOT_AVAILABLE = 'not available',
  LOADING = 'loading',
}

type userNameStatusType = {
  status?: USERNAME_STATUS;
  username?: string;
};

let controller: AbortController;

const CreateProfileForm = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const wallet = useAnchorWallet();
  const [creatingNewProfileLoadingState, setCreatingNewProfileLoadingState] =
    useState(false);
  const [userNameAvailable, setUserNameAvailable] =
    useState<userNameStatusType>();
  const { publicKey } = useWallet();
  const router = useRouter();
  const { user, setUser } = useUserStore();
  const { setAuthenticationState } = useAuthStore();
  const schema = yup.object().shape({
    username: yup
      .string()
      .required('Username is required')
      .min(3, 'Must be at least 3 characters')
      .max(15, 'Must be at most 15 characters')
      .matches(/^[a-zA-Z0-9]+$/, 'Username must be alphanumeric and no spaces')
      .test(
        'is-unique',
        // @ts-ignore
        function (username: string) {
          if (username.length < 3) {
            setUserNameAvailable({ status: undefined, username });
            return;
          }
          setUserNameAvailable({ status: USERNAME_STATUS.LOADING, username });
          if (controller) {
            controller.abort();
          }

          controller = new AbortController();
          const signal = controller.signal;

          return getUserNameStatus(username, signal)
            .then(
              (res: {
                code: number;
                data: string | null;
                error: string;
                username: string;
              }) => {
                if (res.code === 204) {
                  setUserNameAvailable({
                    status: USERNAME_STATUS.AVAILABLE,
                    username: res.username,
                  });
                  return true;
                } else if (res.code === 200) {
                  setUserNameAvailable({
                    status: undefined,
                    username: res.username,
                  });
                  return new yup.ValidationError(
                    'Username is already taken',
                    null,
                    'username'
                  );
                }
              }
            )
            .catch((error) => {
              console.warn('axios error -', error);
              throw new yup.ValidationError(
                'Error checking username availability',
                null,
                'username'
              );
            });
        }
      ),
  });

  const {
    handleSubmit,
    trigger,
    getValues,
    control,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  if (!publicKey) {
    return <>no wallet connected</>;
  }

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setCreatingNewProfileLoadingState(true);
    setAuthenticationState(AuthState.LOADING);
    console.log('1. form submitted');
    if (!userNameAvailable?.status) {
      setError('username', {
        type: 'manual',
        message: 'Not Available',
      });
    }
    const transaction = new anchor.web3.Transaction();
    const { blockhash } = await connection.getLatestBlockhash('finalized');
    const ix = await UserIx(wallet as NodeWallet, uuidV4());
    transaction.feePayer = wallet?.publicKey;
    transaction.recentBlockhash = blockhash;
    transaction.add(ix);
    const signedTx = await wallet?.signTransaction!(transaction);
    const serialized_transaction = signedTx?.serialize();
    const sig = await connection.sendRawTransaction(serialized_transaction!);
    if (sig) {
      return await new Promise<void>((resolve) => {
        createUser({
          icon: user?.icon || (publicKey?.toBase58() as string),
          username: data.username,
          mainwallet: publicKey?.toBase58() as string,
          verified: false,
        }).then((res) => {
          if (res.data) {
            setUser({
              id: res.data.id,
              username: res.data.username,
              icon: res.data.icon,
              mainwallet: res.data.mainwallet,
            });
            console.log('2. new user created - ', user);
            setAuthenticationState(AuthState.AUTHENTICATED);
            //setCreatingNewProfileLoadingState(false);
            console.log(
              '3. authentication state set to authenticated, user set, now redirect is hit'
            );
            router.push(`/` + res.data.username);
          } else {
            setCreatingNewProfileLoadingState(false);
          }
        });
        resolve();
      });
    }
  };

  if (creatingNewProfileLoadingState) {
    return (
      <Center w="full" h="full">
        <Spinner />
      </Center>
    );
  }

  return (
    <Container position={'relative'} w="full">
      <FormControl
        w="full"
        pb="1rem"
        variant={'outline'}
        colorScheme={'pink'}
        isRequired
      >
        <FormLabel fontSize={{ base: 'xs', md: 'sm' }} htmlFor="profilePicture">
          Profile Picture
        </FormLabel>
        <ProfilePicture user={user} onOpen={onOpen} />
      </FormControl>
      {/* this nft carousel rerenders when form submits prevent it form doing so */}
      <Collapse in={isOpen} animateOpacity>
        {/* <NFTCarousel onClose={onClose} /> */}
        <FramerCarousel onClose={onClose} />
      </Collapse>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          pb="1rem"
          variant={'outline'}
          colorScheme={'pink'}
          isInvalid={!!errors.username}
          isRequired
        >
          <FormLabel fontSize={{ base: 'xs', md: 'sm' }} htmlFor="username">
            Username
          </FormLabel>
          <InputGroup>
            <Controller
              name="username"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, ...field } }) => (
                <Input
                  {...field}
                  autoComplete="false"
                  onChange={({ target: { value } }) => {
                    trigger('username');
                    onChange(value);
                  }}
                />
              )}
            />{' '}
            {!creatingNewProfileLoadingState && userNameAvailable && (
              <InputRightElement fontSize="18px">
                {userNameAvailable.status === USERNAME_STATUS.LOADING && (
                  <Spinner size={'xs'} thickness="1px" />
                )}

                {userNameAvailable.status === USERNAME_STATUS.AVAILABLE &&
                  userNameAvailable.username === getValues('username') &&
                  !errors.username && <HiCheck color={'green'} />}
                {userNameAvailable === USERNAME_STATUS.NOT_AVAILABLE &&
                  userNameAvailable.username === getValues('username') && (
                    // eslint-disable-next-line react/jsx-no-undef
                    <RxCross2 color="red" />
                  )}
              </InputRightElement>
            )}
          </InputGroup>
          <FormErrorMessage textAlign={'start'}>
            {errors.username && <>{errors.username.message}</>}
          </FormErrorMessage>
        </FormControl>
        {/* ---- wallet ---- */}
        <FormControl pb="1rem" isRequired>
          <FormLabel fontSize={{ base: 'xs', md: 'sm' }} htmlFor="publickey">
            Wallet Address
          </FormLabel>
          <HStack gap="0.5rem">
            <Center
              rounded="4px"
              bg="#242424"
              height="2.5rem"
              px="1.3rem"
              outline="1px solid #242424"
              w="full"
            >
              <WalletAdd walletAddress={publicKey.toBase58()} size="xs" />
            </Center>
          </HStack>
          <FormErrorMessage>
            {errors.publickey ? <>{errors.publickey.message}</> : <></>}
          </FormErrorMessage>
        </FormControl>
        <Button
          py="1.1rem"
          fontSize={'md'}
          mt={'3rem'}
          w="full"
          type="submit"
          isLoading={isSubmitting}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default CreateProfileForm;
