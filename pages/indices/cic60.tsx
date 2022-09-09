/// import { StrictMode } from 'react';
/// import { defaultHead } from "next/head";
/// import { GetServerSideProps, NextPage } from "next";
/// import { getSession } from "next-auth/react";
/// import Moralis from "moralis";
/// import { render } from "react-dom";
import { Default } from 'components/layouts/Default';
import { Text } from '@chakra-ui/react';

const CIC60 = () => {
  return (
    <Default pageName="CIC60 index">
      <Text>When CIC60 is ready, it shows here.</Text>
      <Text marginTop={20}>Tradingview goes here</Text>
    </Default>
  );
};

export default CIC60;
