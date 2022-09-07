/// import { AdvancedChart } from 'react-tradingview-embed';
/// import { StrictMode } from 'react';
import { TradingViewChart } from 'components/elements/TradingViewChart';
import { Default } from 'components/layouts/Default';

/// import { GetServerSideProps, NextPage } from "next";
/// import { getSession } from "next-auth/react";

/// import Moralis from "moralis";
/// import { render } from "react-dom";
import { Text } from '@chakra-ui/react';
/// import { defaultHead } from "next/head";

/// If widgets props are missing, use widgetPropsAny, ex:
/// - <AdvancedChart widgetPropsAny={{"newProp": true}} />

///const TradingViewChart = () => <AdvancedChart widgetProps={{ theme: 'dark' }} />;

const CIC60 = () => {
  return (
    <Default pageName="CIC60 index">
      <Text>When CIC60 is ready, it shows here.</Text>
      <Text marginTop={20}>Tradingview goes here</Text>
      <TradingViewChart />
    </Default>
  );
};

export default CIC60;
