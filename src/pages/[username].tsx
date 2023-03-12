import { Container } from '@chakra-ui/react';
import { useState } from 'react';
import SEO from 'src/components/SEO';
import UserProfile from 'src/components/User/Profile/UserProfile';
import { getUser, QUERY_TYPE } from 'src/lib/api/userHelper';

type profilePropsType = {
  user: {
    id: string;
    username: string;
    mainwallet: string;
    verified: boolean;
    icon: string;
  };
};

const ProfilePage = (props: profilePropsType) => {
  const [loading, setLoading] = useState<boolean>(false);
  console.log('4. props in profile page - ', props);
  return (
    <>
      <SEO
        title={`@${props.user.username}`}
        description={`${props.user.username} is Contributing to public good on Cubik`}
        image={`https://solana.ghost.io/content/images/2022/06/solana-network-upgrades.png`}
      />
      <Container maxW="7xl" p={{ base: '1rem', md: '1rem 2rem' }}>
        <UserProfile loading={loading} user={props.user} />
      </Container>
    </>
  );
};

export default ProfilePage;

export async function getServerSideProps(context: { query: any }) {
  const { query } = context;
  const { username } = query;

  try {
    const user = await getUser({
      type: QUERY_TYPE.USER_NAME,
      value: username,
    });

    if (!user) {
      return {
        notFound: true,
      };
    }
    return {
      props: { user },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}
