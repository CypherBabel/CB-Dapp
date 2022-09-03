import { Default } from "components/layouts/Default";

import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";

import Moralis from "moralis";
import { render } from "react-dom";
import { Box, Text } from '@chakra-ui/react';
import { defaultHead } from "next/head";



const CICS = () => {
    return (
        <Default pageName="CICS">
            <Text>
                CICS goes here.
            </Text>   
        </Default>
    );
};

export default CICS;
