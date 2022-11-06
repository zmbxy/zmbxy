import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout, NavItems } from '../components';
import Header from '../components/header/Header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>周末必下雨的博客</title>
        <meta name="description" content="周末必下雨的博客" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
    </>
  );
};

export default Home;
