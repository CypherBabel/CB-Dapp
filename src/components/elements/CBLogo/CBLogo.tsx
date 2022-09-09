import { useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

const CBLogo = () => {
  const { colorMode } = useColorMode();

  return (
    <a href="/">
      <Image src={colorMode === 'dark' ? '/CBlogo.png' : '/CBlogo.png'} height={34} width={80} alt="CB" />
    </a>
  );
};

export default CBLogo;
