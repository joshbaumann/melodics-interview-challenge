import React from 'react';
import Head from 'next/head';
import { ChakraProvider, Container } from '@chakra-ui/react';
import Fonts from '../../styles/fonts';
import theme from '../../styles/theme';

const Layout: React.FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Container>
        <Head>
          <title>Rhythm Demo</title>
        </Head>

        <main>
          {children}
        </main>
      </Container>
    </ChakraProvider>
  );
};

export default Layout;
