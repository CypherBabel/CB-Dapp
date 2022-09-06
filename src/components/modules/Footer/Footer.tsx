import { ReactNode } from 'react';
import { Box, Container, Link, SimpleGrid, Stack, Text, Input, IconButton, useColorModeValue } from '@chakra-ui/react';
import { SocialMediaButton } from 'components/elements/SocialMediaButton';
import { Mail } from '@web3uikit/icons';
import { CBILogo } from 'components/elements/CBILogo';

const Logo = () => {
  return <CBILogo />;
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }} spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo />
              <Text fontSize={'md'} color={'green.300'} marginTop={2}>
                A PATH TO THE CRYPTO WORLD
              </Text>
            </Box>
            <Text fontSize={'sm'}>© 2022 CypherBabel. All rights reserved.</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialMediaButton />
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'/indices/cic60'}>CBI</Link>
            <Link href={'/cbradar'}>CR Radar</Link>
            <Link href={'/cbdao'}>CR DAO</Link>
            <Link href={'/cics'}>CICS</Link>
            <Link href={'/roadmap'}>Roadmap</Link>
            <Link href={'https://linktr.ee/rrgoo'}>Linktree</Link>
            <Link href={'https://gu-rr.gitbook.io/cbi-bian-zhi-fang-fa/'}>Docs</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'https://www.google.com'}>Help Center</Link>
            <Link href={'https://www.google.com'}>Terms of Service</Link>
            <Link href={'https://www.google.com'}>Legal</Link>
            <Link href={'https://www.google.com'}>Privacy Policy</Link>
            <Link href={'https://www.google.com'}>Contact Us</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={useColorModeValue('green.400', 'green.800')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'green.600',
                }}
                aria-label="Subscribe"
                icon={<Mail />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
