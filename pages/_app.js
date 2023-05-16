import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ChakraProvider>
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
    </ChakraProvider>
  );
}

export default MyApp;
