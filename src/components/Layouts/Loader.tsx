import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { AuthState, useAuthStore } from 'src/store/authStore';

const Loader = () => {
  const ref = useRef<typeof LoadingBar>(null);
  const { authenticationState } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (authenticationState === AuthState.LOADING) {
      // @ts-ignore
      ref.current?.continuousStart();
    } else {
      // @ts-ignore
      ref.current?.complete();
    }
  }, [authenticationState]);

  if (router.pathname !== '/connect-wallet') return <></>;

  // @ts-ignore
  return <LoadingBar color="#D645A6" ref={ref} />;
};

export default Loader;
