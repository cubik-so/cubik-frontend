import { PublicKey } from '@solana/web3.js';
import axios, { AxiosRequestConfig } from 'axios';

interface AxiosRequestConfigWithSignal extends AxiosRequestConfig {
  signal?: AbortSignal;
}

export const getUserByPubKey = async (publicKey: PublicKey): Promise<any> => {
  try {
    const res = await axios.post(
      process.env.NEXT_PUBLIC_BACKEND_URL + `/user/find/publickey`,
      {
        publickey: publicKey.toBase58(),
      }
    );
    return res.data.data;
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export const getUserById = async (id: string) => {
  try {
    const res = await axios.post(
      process.env.NEXT_PUBLIC_BACKEND_URL + `/user/find/id`,
      {
        id,
      }
    );
    return res.data;
  } catch (e) {
    //console.log((e as Error).message);
    return;
  }
};

export const getUserNameStatus = async (
  username: string,
  signal: AbortSignal
) => {
  const url =
    process.env.NEXT_PUBLIC_BACKEND_URL +
    `/user/check` +
    `/username?username=${username}`;
  try {
    const res = await axios.get(url, {
      signal,
    } as AxiosRequestConfigWithSignal);
    return { ...res.data, username };
  } catch (e) {
    if (axios.isCancel(e)) {
      // Request was cancelled
      console.log('Request cancelled', e);
    } else {
      // Other errors
      console.error('Error from axios - ', e);
    }
  }
};
