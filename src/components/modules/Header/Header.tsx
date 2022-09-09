import { Box, Container, Flex, HStack } from '@chakra-ui/react';
import { ColorModeButton, NavBar } from 'components/elements';
import CBLogo from 'components/elements/CBLogo/CBLogo';
import { SocialMediaButton } from 'components/elements/SocialMediaButton';
import { ConnectButton } from '../ConnectButton';

const Header = () => {
  return (
    <Box borderBottom="1px" borderBottomColor="chakra-border-color">
      <Container maxW="container.xl" p={'10px'}>
        <Flex align="center" justify="space-between">
          <CBLogo />
          <NavBar />
          <HStack gap={'12px'}>
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
