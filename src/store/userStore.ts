import produce from 'immer';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';

export interface IWallet {
  walletAddress?: string;
  isPrimaryWallet?: boolean;
  connected: boolean;
}

export interface IUser {
  id?: string;
  username?: string;
  icon?: string;
  mainwallet?: string;
}
interface IUserStore {
  user?: IUser;
  setUser: (user: IUser | null) => IUser | undefined;
  //  wallet?: IWallet;
  //  setWallet: (wallet: IWallet) => IUser | undefined;
}

const user: IUser = {
  id: undefined,
};
const wallet: IWallet = {
  connected: false,
};
export const useUserStore = create<IUserStore>((set, get) => ({
  user: user,

  setUser: (data: IUser | null): IUser | undefined => {
    set(
      produce((draft) => {
        draft.user = data;
      })
    );
    const newUser = get().user as IUser;
    return newUser;
  },
  //  wallet: wallet,
  // setWallet: (wallet: IWallet): IUser | undefined => {
  //   set(
  //     produce((draft) => {
  //       draft.wallet = wallet;
  //     })
  //   );
  //   const newUser = get().user;
  //   return newUser;
  // },
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('profileStore', useUserStore);
}
