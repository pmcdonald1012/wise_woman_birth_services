import Head from "next/head";
import Header from "../components/General/Header";
import { Landing } from "../components/Home/Landing";
import Image from "next/image";
import BabyFeet from "../public/BabyFeet.jpg";
import s from "../styles/Home/Home.module.css";
//Home page/landing page
export default function Home() {
  return (
    <div>
      <Head>
        <title>WiseWomanBirthServices</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={s.container}>
          <div className={s.headerContainer}>
            <Header />
          </div>
          <div className={s.imgContainer}>
            <div className={s.imgBox}></div>
          </div>
        </div>
        <Landing />
      </main>
    </div>
  );
}
