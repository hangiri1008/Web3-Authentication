import { Layout } from "@common/components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>WALLET CONNECTION</title>
        <meta
          name="description"
          content="This is Next.js boilerplate used in IBCT dev team"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

export default App;
