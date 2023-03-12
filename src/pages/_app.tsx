import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/plus-jakarta-sans/300.css';
import '@fontsource/plus-jakarta-sans/400.css';
import '@fontsource/plus-jakarta-sans/500.css';
import '@fontsource/plus-jakarta-sans/600.css';
import '@fontsource/plus-jakarta-sans/700.css';
import '@fontsource/plus-jakarta-sans/800.css';
import theme from 'config/chakra.config';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
import HomeLayout from 'src/components/Layouts/HomeLayout';
import { useAsPathInitializer } from 'src/store/pathStore';

require('@solana/wallet-adapter-react-ui/styles.css');
require('@usedispatch/forum/dist/style.css');

const WalletContext: any = dynamic(() => import('../contexts/WalletContext'), {
  ssr: false,
});

function AppProvider({ children }: { children: ReactNode }) {
  return (
    <WalletContext>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </WalletContext>
  );
}

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  useAsPathInitializer();

  return (
    <AppProvider>
      <HomeLayout>
        <Component {...pageProps} />
      </HomeLayout>
    </AppProvider>
  );
}
