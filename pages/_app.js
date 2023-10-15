import Head from "next/head";
import Layout from "./Layout";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Sanganai </title>
      <meta
        name="description"
        content="Sanganai Management Suite: Streamline your event ticketing process, enhance customer experience, and gain valuable insights for event organizers. Buy and sell event tickets online with ease."
      />
      <meta
        name="keywords"
        content="Sanganai, event tickets, ticketing system, buy tickets, sell tickets, event management"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="author" content="DigitalGeeks" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />

      {/* Additional CSS or JavaScript files can be added here */}
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default MyApp;
