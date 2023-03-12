import produce from 'immer';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import create from 'zustand';

export enum AuthState {
  AUTHENTICATED = 'authenticated',
  NOT_AUTHENTICATED = 'not authenticated',
  LOADING = 'loading',
}

interface IAuthenticationStore {
  authenticationState: AuthState;
  setAuthenticationState: (status: AuthState) => AuthState;
}

export const useAuthStore = create<IAuthenticationStore>((set) => ({
  authenticationState: AuthState.NOT_AUTHENTICATED,
  setAuthenticationState: (status: AuthState): AuthState => {
    // set the auth status
    set(
      produce((draft) => {
        draft.authenticationState = status;
      })
    );
    return status;
  },
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('profileStore', useAuthStore);
}
