import { Box, Container, Flex, HStack } from '@chakra-ui/react';
import { ColorModeButton, MoralisLogo, NavBar } from 'components/elements';
import CBILogo from 'components/elements/CBILogo/CBILogo';
import { SocialMediaButton } from 'components/elements/SocialMediaButton';
import { ConnectButton } from '../ConnectButton';

const Header = () => {
  return (
    <Box borderBottom="1px" borderBottomColor="chakra-border-color">
      <Container maxW="container.xl" p={'10px'}>
        <Flex align="center" justify="space-between">
          <CBILogo />
          <NavBar />
          <HStack gap={'10px'}>
            <SocialMediaButton />
            <ConnectButton />
            <ColorModeButton />   
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
