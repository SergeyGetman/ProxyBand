import './index.css';
import type { AppProps } from 'next/app';
import Navigation from './Navigation';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}
