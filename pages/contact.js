import Head from "next/head";
import Landing from "../components/Contact/Landing";
import Header from "../components/General/Header";
const contact = () => {
  return (
    <div>
      <Head>
        <title>WiseWomanBirthServices</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Landing />
      </main>
    </div>
  );
};

export default contact;
