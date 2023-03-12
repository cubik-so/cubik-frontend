import { Metaplex } from '@metaplex-foundation/js';
import { Connection, PublicKey } from '@solana/web3.js';

export type NFTData = {
  image: string;
};

const connection = new Connection(
  'https://wispy-responsive-log.solana-mainnet.quiknode.pro/a415202e697413211ec3e11b2231c8187d248067/'
);
const metaplex = Metaplex.make(connection);

export const metaplexGetByOwner = async (
  publicKey: PublicKey | null
): Promise<string[]> => {
  try {
    const metaplexResponse = await metaplex
      .nfts()
      .findAllByOwner({ owner: publicKey as PublicKey });
    const promises = metaplexResponse.map((nftMetadata) => nftMetadata.uri);
    return await Promise.all(promises);
  } catch (error) {
    return [];
  }
};
