import anchor from '@project-serum/anchor';
import NodeWallet from '@project-serum/anchor/dist/cjs/nodewallet';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import NewUserOnboardingLayout from 'src/components/Layouts/NewUserOnboardingLayout';
import CreateNewProfile from 'src/components/User/CreateAccount/CreateNewProfile';
import { connection, UserIx } from 'src/utils/acnhorProgram';

const CreateProfile = () => {
  const wallet = useAnchorWallet();
  const user = async () => {
    const transaction = new anchor.web3.Transaction();
    const { blockhash } = await connection.getLatestBlockhash('finalized');
    const ix = await UserIx(wallet as NodeWallet, 'fasdasdfdfas');
    transaction.feePayer = wallet?.publicKey;
    transaction.recentBlockhash = blockhash;
    transaction.add(ix);
    const signedTx = await wallet?.signTransaction!(transaction);
    const serialized_transaction = signedTx?.serialize();
    const sig = await connection.sendRawTransaction(serialized_transaction!);
    console.log(sig);
  };
  // do not show this route if user is already authenticated and if not authenticated do not show if wallet is not connected
  return (
    <NewUserOnboardingLayout
      heading={'Create Your Profile'}
      subHeading={
        'Add your Username so that everyone can call you buy a name and not just a wallet address.'
      }
    >
      <CreateNewProfile />
    </NewUserOnboardingLayout>
  );
};

export default CreateProfile;
