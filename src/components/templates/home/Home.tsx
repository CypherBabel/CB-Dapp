import { CheckCircleIcon, SettingsIcon } from '@chakra-ui/icons';
import { Button, Container } from '@chakra-ui/react';
import { Heading, VStack, List, ListIcon, ListItem, Text} from '@chakra-ui/react';

const Home = () => {

    return (
      <VStack w={'full'}>
        <VStack w={'full'}>
          <Heading fontSize={40} textAlign="center" marginBottom={6} style={{whiteSpace: 'pre-wrap'}} lineHeight={1.5}>
            CBI is a branch of CypherBabel {"\n"} that focuses on index products in the crypto world.
          </Heading>
          <a href="https://google.com">
            <Button size="lg" colorScheme="green" marginTop={20}>
              More indices
            </Button>
          </a> 
        </VStack>
        
        <VStack>
          <Heading fontSize={30} textAlign="center" marginTop={20}>
            Something else
          </Heading>
        </VStack>
        
        </VStack> 
  );
};

export default Home;

  {/* <List fontSize={30} spacing={3}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            blablabla.
          </ListItem>
        </List> */}