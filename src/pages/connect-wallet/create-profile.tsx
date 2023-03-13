import { useAnchorWallet } from '@solana/wallet-adapter-react';
import NewUserOnboardingLayout from 'src/components/Layouts/NewUserOnboardingLayout';
import CreateNewProfile from 'src/components/User/CreateAccount/CreateNewProfile';

const CreateProfile = () => {
  const wallet = useAnchorWallet();

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
