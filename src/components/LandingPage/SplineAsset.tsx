import { useMediaQuery } from '@chakra-ui/react';
import Spline from '@splinetool/react-spline';

export default function SplineAsset() {
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)', {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });

  return isSmallerThan800 ? (
    <Spline scene="https://prod.spline.design/4wKQdkc5gvJ5VOtH/scene.splinecode" />
  ) : (
    <Spline scene="https://prod.spline.design/A4R8E1GFVWaGC2ra/scene.splinecode" />
  );
}
