import {
  createAssociatedTokenAccountInstruction,
  createTransferInstruction,
  getAssociatedTokenAddress,
} from '@solana/spl-token';
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  TransactionInstruction,
} from '@solana/web3.js';

export const sendSPL = async (
  mint: string,
  fromPubKey: PublicKey,
  toPubKey: PublicKey,
  amount: number,
  connection: Connection
) => {
  try {
    const token = new PublicKey(mint);

    const fromTokenAccount = await getAssociatedTokenAddress(token, fromPubKey);
    const toTokenAccount = await getAssociatedTokenAddress(token, toPubKey);
    const toTokenAccountInfo = await connection.getAccountInfo(toTokenAccount);
    const ix: TransactionInstruction[] = [];
    if (!toTokenAccountInfo) {
      ix.push(
        createAssociatedTokenAccountInstruction(
          fromPubKey,
          toTokenAccount,
          toPubKey,
          token
        )
      );
    }

    ix.push(
      createTransferInstruction(
        fromTokenAccount,
        toTokenAccount,
        fromPubKey,
        Number(amount) * 1000000
      )
    );

    return ix;
  } catch (e) {
    //console.log('Error in Send SPL function:', e);
  }
};
export const sendSOL = async (
  fromPubKey: PublicKey,
  toPubKey: PublicKey,
  amount: number
) => {
  try {
    const solTransfer = SystemProgram.transfer({
      fromPubkey: fromPubKey,
      toPubkey: toPubKey,
      lamports: LAMPORTS_PER_SOL * amount,
    });
    return [solTransfer];
  } catch (e) {
    //console.log((e as Error).message);
    return [];
  }
};
