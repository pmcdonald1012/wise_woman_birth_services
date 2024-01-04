import s from "../../styles/About/Bio.module.css";
const Bio = () => {
  return (
    <div className={s.container}>
      <div className={s.subContainer1}>
        <div className={s.subsubCont}>
          <div className={s.title}>Mother Of Nine</div>
          <div className={s.bioPara}>
            <p>
              Hi, I’m Lisa McDonald. I am a DONA-certified birth doula and a
              CAPPA trained postpartum doula. I am also the mother of nine
              children and the grandmother of seven. Having given birth nine
              times, seven unique hospital births and two home births, I wish I
              had had a doula by my side for all of it. After raising and
              homeschooling my kids for over 34 years, I decided to pursue my
              passion-birth work. It has been a fulfilling job accompanying
              families on their journey to a safe and desired birth experience
              and then ensuring that they have the best possible start as a
              family unit. I love to provide the tools to my clients so they can
              have the birth experience they want. Every time I am present to
              see a new blessing come into this world, I feel honored. And when
              I work with a new family, helping them identify their baby’s needs
              and giving them tools to meet those needs, I am thankful. I love
              to impart the wisdom I learned and earned with these families.
            </p>
          </div>
        </div>
      </div>
      <div className={s.title2}>Promoting Healthy Births</div>
      <div className={s.subContainer2}>
        <div className={s.subsubCont2}>
          <div className={s.quoteContainer}>
            <div className={s.quote}>{"“ Birthing done the right way “"}</div>
          </div>
          <p>
            I am trained in Spinning Babies, Gena Kirby’s Rebozo for Doulas, and
            Belly Binding. I attended college and nursing school at the
            University of Colorado. When I am not busy taking care of mothers
            and their families I love to read and workout-weight lifting,
            swimming, dancing, and pickleball. I also love to spend time with my
            expanding family.
          </p>
        </div>
      </div>
      <p className={s.copyRight}>
        © 2023 Wise Woman Birth Services. All Rights Reserved.
      </p>
    </div>
  );
};

export default Bio;
