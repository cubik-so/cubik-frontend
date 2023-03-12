import config from '@/config/general.config';
import LandingPage from 'src/components/LandingPage/LandingPage';
import SEO from 'src/components/SEO';

export default function Home() {
  return (
    <>
      <SEO
        title={`${config.general.name}`}
        description={`${config.general.name} is a Quadratic funding platform on Solana Blockchain.`}
        image={`https://solana.ghost.io/content/images/2022/06/solana-network-upgrades.png`}
      />
      <main>
        <LandingPage />
      </main>
    </>
  );
}
