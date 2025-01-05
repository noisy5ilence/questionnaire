import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { Open_Sans } from 'next/font/google';
import Head from 'next/head';

import { wrapper } from '@/store';

import '@/styles/globals.css';

const openSans = Open_Sans({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <>
      <Head>
        <title>Nebula</title>
      </Head>
      <main style={openSans.style}>
        <Provider store={store}>
          <Component {...props.pageProps} />
        </Provider>
      </main>
    </>
  );
}
