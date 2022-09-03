import { Default } from "components/layouts/Default";

import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";

import Moralis from "moralis";
import { render } from "react-dom";
import { Box, Text } from '@chakra-ui/react';
import { defaultHead } from "next/head";

import { AdvancedChart } from "react-tradingview-embed";

const TradingViewChart = () => <AdvancedChart widgetProps={{"theme": "dark"}} />;

// If widgets props are missing, use widgetPropsAny, ex:
// - <AdvancedChart widgetPropsAny={{"newProp": true}} />


const CIC60 = () => {
    return (
        <Default pageName="CIC60 index">
            <Text>
                When CIC60 is ready, it shows here.
            </Text>   
            <Text marginTop={20}>
                <TradingViewChart />
            </Text>
        </Default>
    );
};

export default CIC60;