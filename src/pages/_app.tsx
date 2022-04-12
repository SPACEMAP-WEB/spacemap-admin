import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate, dehydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';
import { GlobalStyle } from '../app.styled';
import AppWeb from 'app.layout/AppWeb';
import PageSign from '../pages/sign';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { RootState, store } from 'app.store/config/configureStore';

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
  const { login } = useSelector((state: RootState) => state.login);

  return (
    <>
      {login ? (
        <AppWeb contentsComponent={<Component {...pageProps} />} />
      ) : (
        <PageSign />
      )}
    </>
  );
};

const AppContainer = (props) => {
  const { pageProps } = props;

  return (
    <>
      <Head>
        <title> Space-Map Admin-Page</title>
      </Head>
      <GlobalStyle />
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Hydrate state={pageProps.dehydratedState}>
            <App {...props} />
          </Hydrate>
        </QueryClientProvider>
      </Provider>
    </>
  );
};

AppContainer.getInitialProps = async ({ Component, ctx }) => {
  return {
    pageProps: {
      dehydratedState: dehydrate(queryClient),
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    },
  };
};

export default AppContainer;
