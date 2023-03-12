import NewUserOnboardingLayout from 'src/components/Layouts/NewUserOnboardingLayout';
import SolanaWalletButton from 'src/components/Wallet/SolananWalletButton';

const ConnectWallet = () => {
  console.info('🤡 connect wallet page rendered');

  return (
    <NewUserOnboardingLayout
      heading={'Welcome to Cubik'}
      subHeading={
        'Join a movement of individuals dedicated to creating a better Solana community. Connect Wallet to get Started.'
      }
    >
      <SolanaWalletButton />
    </NewUserOnboardingLayout>
  );
};

export default ConnectWallet;
