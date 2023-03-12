/* eslint-disable no-unused-vars */
import axios from 'axios';

export const createUser = async ({
  icon,
  mainwallet,
  username,
  verified,
}: {
  username: string;
  mainwallet: string;
  verified: boolean;
  icon: string;
}): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .post(process.env.NEXT_PUBLIC_BACKEND_URL + `/user/create`, {
        icon: icon,
        mainwallet: mainwallet,
        username: username,
        verified: verified,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

export const updateUser = async ({
  icon,
  mainwallet,
  username,
  verified,
  bio,
}: {
  icon: string;
  mainwallet: string;
  username: string;
  verified: boolean;
  bio: string;
}): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .patch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/updateUser`, {
        icon: icon,
        mainwallet: mainwallet,
        username: username,
        verified: verified,
        bio: bio,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

export enum QUERY_TYPE {
  USER_NAME = 'username',
  ID = 'id',
  PUBLIC_KEY = 'publickey',
}

export type getUserMethodAttributes = {
  type: QUERY_TYPE;
  value: string;
};

export const getUser = async (query: getUserMethodAttributes) => {
  if (!query.type || !query.value) {
    throw new Error('query type or value is missing');
  }

  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_BACKEND_URL +
        `/user/find` +
        `?${query.type}=${query.value}`
    );
    if (res.data.code === 204) {
      return res.data.data;
    } else if (res.data.code === 200) {
      return res.data.data;
    }
  } catch (e) {
    throw new Error('Error Connecting to server');
  }
};
