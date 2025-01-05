import { Head, Html, Main, NextScript } from 'next/document';

import { defaultThemeColor } from '@/constants/colors';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='icon' type='image/svg+xml' href='/icon.svg' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='icon' href='/icon.png' sizes='32x32' />
        <link rel='apple-touch-icon' href='/apple-icon.png' />
        <meta name='theme-color' content={defaultThemeColor} />
      </Head>
      <body className='antialiased'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
