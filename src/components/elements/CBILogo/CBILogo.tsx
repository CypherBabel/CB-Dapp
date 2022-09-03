import { useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

const CBILogo = () => {
  const { colorMode } = useColorMode();

  return (
    <Image
      src={colorMode === 'dark' ? '/CBIlogo2.png' : '/CBIlogo2.png'}
      height={34}
      width={80}
      alt="CBI"
    />
  );
};

export default CBILogo;
