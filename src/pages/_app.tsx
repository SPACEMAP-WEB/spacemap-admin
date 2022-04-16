import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate, dehydrate } from 'react-query/hydration'
import { ReactQueryDevtools } from 'react-query/devtools'
import { GlobalStyle } from '../app.styled'
import AppWeb from 'app.layout/AppWeb'
import PageSign from '../pages/sign'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { RootState, store } from 'app.store/config/configureStore'
import React, { useEffect } from 'react'
import { requestUser } from 'app.store/loginApp/loginUser'
import { AppContext, AppInitialProps, AppProps } from 'next/app'
import { NextComponentType } from 'next'

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
})

const App = ({ Component, pageProps }: AppProps) => {
  const { login, isLoading } = useSelector((state: RootState) => state.login)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestUser())
  }, [])

  if (!isLoading) return null

  return <>{login ? <AppWeb contentsComponent={<Component {...pageProps} />} /> : <PageSign />}</>
}

const AppContainer: NextComponentType<AppContext, AppInitialProps, AppProps> = (
  props: AppProps
) => {
  const { pageProps } = props

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
  )
}

AppContainer.getInitialProps = async ({ Component, ctx }: AppContext) => {
  return {
    pageProps: {
      dehydratedState: dehydrate(queryClient),
      ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
    },
  }
}

export default AppContainer
