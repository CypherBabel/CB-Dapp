import { useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

const CBILogo = () => {
  const { colorMode } = useColorMode();

  return (
    <a href="/">
      <Image src={colorMode === 'dark' ? '/CBIlogo2.png' : '/CBIlogo2.png'} height={34} width={80} alt="CBI" />
    </a>
  );
};

export default CBILogo;
