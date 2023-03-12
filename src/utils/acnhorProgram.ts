import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { clusterApiUrl } from '@solana/web3.js';
import { IDL, Idl } from './program';
// import {
//   ASSOCIATED_TOKEN_PROGRAM_ID,
//   createAssociatedTokenAccountInstruction,
//   getAssociatedTokenAddress,
//   TOKEN_PROGRAM_ID,
// } from '@solana/spl-token';
import NodeWallet from '@project-serum/anchor/dist/cjs/nodewallet';

const mainnetId = '';
export const PROGRAM_ID = new anchor.web3.PublicKey(mainnetId);
// const USDC_MINT = 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v';

export const getProvider = (wallet: anchor.Wallet) => {
  const opts = {
    preflightCommitment: 'processed' as anchor.web3.ConfirmOptions,
  };

  const connectionURI = clusterApiUrl('mainnet-beta');

  const connection = new anchor.web3.Connection(
    connectionURI,
    opts.preflightCommitment
  );

  const provider = new anchor.AnchorProvider(
    connection,
    wallet,
    opts.preflightCommitment
  );
  return provider;
};

export const anchorProgram = (wallet: anchor.Wallet) => {
  const provider = getProvider(wallet);
  const idls = Idl as anchor.Idl;
  const program = new anchor.Program(
    idls,
    PROGRAM_ID,
    provider
  ) as unknown as Program<IDL>;

  return program;
};

export const createUser = async (
  wallet: NodeWallet,
  userId: string,
  metadata: string
) => {
  const program = anchorProgram(wallet);
  const [userAccount] = anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from('user'), Buffer.from(userId)],
    program.programId
  );
  const ix = await program.methods
    .createUser(userId, metadata)
    .accounts({
      authority: wallet.publicKey,
      userAccount: userAccount,
      rent: anchor.web3.SYSVAR_RENT_PUBKEY,
      systemProgram: anchor.web3.SystemProgram.programId,
    })
    .instruction();

  return ix;
};
