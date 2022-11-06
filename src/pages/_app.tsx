import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import progress from 'nprogress';
import '@arco-design/web-react/dist/css/arco.css';
import '../styles/globals.css';

if (typeof window !== 'undefined') {
  progress.start();
  progress.done();
}

Router.events.on('routeChangeStart', () => progress.start());
Router.events.on('routeChangeComplete', () => progress.done());
Router.events.on('routeChangeError', () => progress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
