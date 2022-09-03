import { Default } from 'components/layouts/Default';
// import { EvmAddress } from '@moralisweb3/evm-utils';
import { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
// import getErc20LogoAddress from 'utils/getErc20LogoAddress';
import Moralis from 'moralis';
import { render } from 'react-dom';
import { Text } from '@chakra-ui/react';
// import { ERC20Balances, IERC20Balances } from 'components/templates/balances/ERC20';

const MintERC20Token = () => {
  return (
    <Default pageName="Mint ERC20 Token">
      <Text>
        It is time for you to show off, bro!
      </Text>
    </Default>
  );
};

export default MintERC20Token;