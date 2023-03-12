import { Center, Flex, Spinner, Text } from '@chakra-ui/react';
import type { WalletName } from '@solana/wallet-adapter-base';
import { WalletReadyState } from '@solana/wallet-adapter-base';
import type { Wallet } from '@solana/wallet-adapter-react';
import { useWallet } from '@solana/wallet-adapter-react';
import Image from 'next/image';
import { useCallback, useMemo, useState } from 'react';

export const ConnectWallet = () => {
  const { wallets, select, publicKey, connecting } = useWallet();
  const [spinning, setSpinning] = useState(true);
  const [connectingWallet, setConnectingWallet] = useState('');

  const [listedWallets, collapsedWallets] = useMemo(() => {
    const installed: Wallet[] = [];
    const loadable: Wallet[] = [];
    const notDetected: Wallet[] = [];

    for (const wallet of wallets) {
      if (wallet.readyState === WalletReadyState.NotDetected) {
        notDetected.push(wallet);
      } else if (wallet.readyState === WalletReadyState.Loadable) {
        loadable.push(wallet);
      } else if (wallet.readyState === WalletReadyState.Installed) {
        installed.push(wallet);
      }
    }

    let listed: Wallet[] = [];
    let collapsed: Wallet[] = [];

    if (installed.length) {
      listed = installed;
      collapsed = [...loadable, ...notDetected];
    } else if (loadable.length) {
      listed = loadable;
      collapsed = notDetected;
    } else {
      collapsed = notDetected;
    }

    return [listed, collapsed];
  }, [wallets]);

  const handleWalletClick = useCallback(
    (walletName: WalletName) => {
      setConnectingWallet(walletName);
      setSpinning(true);
      select(walletName);
    },
    [select]
  );

  // if wallet connection throws error then stop spinner
  // useEffect(() => {
  //   if (connecting) {
  //     if (publicKey) {
  //       setSpinning(false);
  //     }
  //   }
  // }, [publicKey, connecting]);

  return (
    <>
      {[...listedWallets, ...collapsedWallets].map((wallet) => (
        <Flex
          zIndex={'1'}
          as="button"
          background={
            'radial-gradient(167.94% 625% at 50% -525%, #707070 0%, #4A4A4A 23.44%, #2E2D2D 63.54%, #262626 77.52%, #222222 100%) !important'
          }
          align="center"
          w="full"
          h="40px"
          px="1rem"
          rounded="7px"
          cursor="pointer"
          transition={'all 0.5s ease-out'}
          color="#A6A6A6"
          position={'relative'}
          overflow={'hidden'}
          border="0.1px solid transparent"
          _hover={{
            transition: 'all 0.5s ease-out',
            WebkitTransition: 'all 0.5s ease-out',
            border: '0.1px solid #464646',
            background:
              'radial-gradient(39.41% 146.67% at 50.25% -46.67%, #707070 0%, #4A4A4A 23.44%, #2E2D2D 63.54%, #262626 77.52%, #222222 100%) !important',
          }}
          _focus={{
            border: '0.1px solid #464646',
          }}
          _active={{
            border: '0.1px solid #464646',
          }}
          // onClick={onConnectWallet.bind(null, wallet)}
          key={wallet.adapter.name}
          onClick={() => {
            handleWalletClick(wallet.adapter.name);
          }}
        >
          <Flex gap={{ base: '0.1rem', md: '0.5rem' }} align="center">
            <Center rounded="full">
              {/* add spinner when wallet is connecting */}
              {spinning ? (
                // for wallet clicked add spinner to the logo
                wallet.adapter.name === connectingWallet ? (
                  <Spinner
                    thickness="1px"
                    speed="0.9s"
                    emptyColor="#464646"
                    color="#FF8EFF"
                    size="sm"
                  />
                ) : (
                  <Image
                    width={20}
                    height={20}
                    src={
                      wallet.adapter.name === 'Ledger'
                        ? wallet.adapter.icon
                        : wallet.adapter.icon
                    }
                    alt={`${wallet.adapter.name} Icon`}
                  />
                )
              ) : (
                <Image
                  width={20}
                  height={20}
                  src={
                    wallet.adapter.name === 'Ledger'
                      ? wallet.adapter.icon
                      : wallet.adapter.icon
                  }
                  alt={`${wallet.adapter.name} Icon`}
                />
              )}
            </Center>
            <Text fontSize={{ base: 'xs', md: 'sm' }} ml={2} fontWeight={600}>
              {wallet.adapter.name}
            </Text>
          </Flex>
        </Flex>
      ))}
    </>
  );
};
