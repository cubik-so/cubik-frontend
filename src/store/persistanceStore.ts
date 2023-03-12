import produce from 'immer';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import create from 'zustand';
import { persist } from 'zustand/middleware';
import { IUser, IWallet } from './userStore';

type persistDataType = {
  id?: string;
  username?: string;
  icon?: string;
};

interface IPersistanceStore {
  persistedUser?: IUser;
  persistedWallets?: IWallet[];
  setPersistanceUser: (data: persistDataType) => void;
  setPersistanceWallet: (data: IWallet) => void;
}
export const usePersistanceStore = create<IPersistanceStore>()(
  persist(
    (set) => ({
      persistedUser: undefined,
      persistedWallets: undefined,
      setPersistanceUser: (data: persistDataType) => {
        set(
          produce((draft) => {
            draft.persistedWallets = data;
          })
        );
      },
      setPersistanceWallet: (data: IWallet) => {
        set(
          produce((draft) => {
            draft.psersistedWallets = [data];
          })
        );
      },
    }),
    { name: 'cubik' }
  )
);

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('localStore', usePersistanceStore);
}
