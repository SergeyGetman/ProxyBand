import './index.css';
import type { AppProps } from 'next/app';

import React from 'react';
import Navigation from './navigation';
import HomePage from './pages/HomePage';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
