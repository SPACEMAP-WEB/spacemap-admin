import { useEffect } from 'react';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate, dehydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useGetUser, useStoreIntoAPP } from 'app.store/intoAPP/store.intoAPP';
import { parseCookies } from 'nookies';
import { GlobalStyle } from '../app.styled';
import {
  initializeStore,
  useCreateStore,
  StoreProvider,
} from 'app.store/rootStore';
import AppWeb from 'app.layout/AppWeb';
import PageSign from '../pages/sign';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: false,
      notifyOnChangeProps: 'tracked',
      cacheTime: 1,
    },
  },
});

const App = ({ Component, pageProps }) => {
  const getUser = useGetUser();
  const requestAuthUser = useStoreIntoAPP((state) => state.requestAuthUser);
  useEffect(() => {
    requestAuthUser();
  }, []);
  if (getUser.isLoading) return null;
  return (
    <>
      {getUser?.login ? (
        <AppWeb contentsComponent={<Component {...pageProps} />} />
      ) : (
        <PageSign />
      )}
    </>
  );
};

const AppContainer = (props) => {
  const { pageProps } = props;
  const createStore = useCreateStore(pageProps.initialZustandState);

  return (
    <>
      <Head>
        <title> Space-Map Admin-Page</title>
      </Head>
      <GlobalStyle />
      <StoreProvider createStore={createStore}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Hydrate state={pageProps.dehydratedState}>
            <App {...props} />
          </Hydrate>
        </QueryClientProvider>
      </StoreProvider>
    </>
  );
};

AppContainer.getInitialProps = async ({ Component, ctx }) => {
  const cookies = parseCookies(ctx);
  const zustandStore = initializeStore();

  /* only SSR */
  if (!!ctx.req) {
    await zustandStore.getState().configPrefetch(cookies);
  }

  return {
    pageProps: {
      initialZustandState: JSON.parse(JSON.stringify(zustandStore.getState())),
      dehydratedState: dehydrate(queryClient),
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    },
  };
};

export default AppContainer;
