import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>WEB3 Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

export default App;
