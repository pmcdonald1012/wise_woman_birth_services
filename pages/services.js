import Header from "../components/General/Header";
import Head from "next/head";
import Landing from "../components/Services/Landing";
import s from "../styles/Services/Services.module.css";
import BirthServicesCard from "../components/Services/BirthServicesCard";
const services = () => {
  return (
    <div>
      <Head>
        <title>WiseWomanBirthServices</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={s.headerCont}>
          <Header />
        </div>
        <Landing />
        <div className={s.sectTitleCont}>
          <div>Services</div>
        </div>
        <BirthServicesCard />
      </main>
    </div>
  );
};

export default services;
