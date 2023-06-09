import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { clusterApiUrl } from '@solana/web3.js';
import { IDL, Idl } from './program';
// import {

const Id = 'HVwXMnZcktEy98VBybjgSs48x8fHuRuurbZhsXoZPQiz';
export const PROGRAM_ID = new anchor.web3.PublicKey(Id);

const opts = {
  preflightCommitment: 'processed' as anchor.web3.ConfirmOptions,
};
export const connection = new anchor.web3.Connection(
  clusterApiUrl('devnet'),
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

  const [user_account] = await anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from('user'), Buffer.from(userId)],
    program.programId
  );
  console.log(user_account.toBase58());

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
  const [project_account] = await anchor.web3.PublicKey.findProgramAddress(
    [Buffer.from('project'), Buffer.from('abcad')],
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

export const ContributionAccount = async (
  anchorWallet: anchor.Wallet,
  projectId: string,
  contribution_id: string,
  amount: number,
  usd_amount: number,
  token: string
) => {
  const program = anchorProgram(anchorWallet);
  const [contribution_account] = anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from('contribution'), Buffer.from(contribution_id)],
    program.programId
  );
  const ix = await program.methods
    .createContribution(
      '40efe896d284',
      projectId,
      contribution_id,
      new anchor.BN(amount),
      new anchor.BN(usd_amount),
      new anchor.web3.PublicKey(token)
    )
    .accounts({
      authority: anchorWallet.publicKey,
      contributionAccount: contribution_account,
      systemProgram: anchor.web3.SystemProgram.programId,
      rent: anchor.web3.SYSVAR_RENT_PUBKEY,
    })
    .instruction();

  return ix;
};
