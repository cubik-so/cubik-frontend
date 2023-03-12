import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { IDL, Idl } from './program';
// import {

const mainnetId = 'Ce6uqRiNkmsg5GcwTpCmTsxbUX566ssD2qrtDRHDaMEJ';
export const PROGRAM_ID = new anchor.web3.PublicKey(mainnetId);
// const USDC_MINT = 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v';

const opts = {
  preflightCommitment: 'processed' as anchor.web3.ConfirmOptions,
};
export const connection = new anchor.web3.Connection(
  'http://localhost:8899',
  opts.preflightCommitment
);
export const getProvider = (wallet: anchor.Wallet) => {
  // const connectionURI = clusterApiUrl();

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

export const UserIx = async (anchorWallet: anchor.Wallet, userId: string) => {
  const program = anchorProgram(anchorWallet);

  const [user_account] = anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from('user'), Buffer.from(userId)],
    program.programId
  );

  const ix = await program.methods
    .createUser(userId)
    .accounts({
      authority: anchorWallet.publicKey,
      userAccount: user_account,
      systemProgram: anchor.web3.SystemProgram.programId,
      rent: anchor.web3.SYSVAR_RENT_PUBKEY,
    })
    .instruction();

  return ix;
};

export const ProjectIx = async (
  anchorWallet: anchor.Wallet,
  projectId: string
) => {
  const program = anchorProgram(anchorWallet);
  const [project_account] = anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from('project'), Buffer.from(projectId)],
    program.programId
  );
  const ix = await program.methods
    .createProject(projectId)
    .accounts({
      authority: anchorWallet.publicKey,
      projectAccount: project_account,
      systemProgram: anchor.web3.SystemProgram.programId,
      rent: anchor.web3.SYSVAR_RENT_PUBKEY,
    })
    .instruction();

  return ix;
};
