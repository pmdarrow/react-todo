import Head from 'next/head';

export default () =>
  <header>
    <Head>
      <style global jsx>{`
        body {
          font-family: "Helvetica Neue", Arial, sans-serif;
          color: ##5d5d5d;
        }
        a {
          text-decoration: none;
          color: #03a9f4;
        }
      `}</style>
    </Head>
  </header>;
