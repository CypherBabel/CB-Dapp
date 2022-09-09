import { Default } from 'components/layouts/Default';
/// import { GetServerSideProps, NextPage } from "next";
/// import { getSession } from "next-auth/react";

/// import Moralis from "moralis";
/// import { render } from "react-dom";
import { Text } from '@chakra-ui/react';
/// import { defaultHead } from "next/head";

const MC20 = () => {
  return (
    <Default pageName="MC20 index">
      <Text>When MC20 is ready, it shows here.</Text>
      <Text marginTop={20}>TradingView goes here</Text>
    </Default>
  );
};

export default MC20;
