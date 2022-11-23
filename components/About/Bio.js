import s from "../../styles/About/Bio.module.css";
const Bio = () => {
  return (
    <div className={s.container}>
      <div className={s.subContainer1}>
        <div className={s.title}>Mother Of Nine</div>
        <div className={s.bioPara}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci a
            scelerisque purus semper eget duis. Aliquam nulla facilisi cras
            fermentum odio eu feugiat pretium nibh. Amet luctus venenatis lectus
            magna fringilla urna porttitor rhoncus dolor. Sed turpis tincidunt
            id aliquet risus feugiat in ante metus. Amet commodo nulla facilisi
            nullam vehicula. Facilisi cras fermentum odio eu feugiat pretium
            nibh ipsum consequat. Vel fringilla est ullamcorper eget nulla
            facilisi etiam dignissim diam. Sem viverra aliquet eget sit amet
            tellus cras adipiscing. Quis viverra nibh cras pulvinar. Orci a
            scelerisque purus semper eget duis at tellus. Maecenas accumsan
            lacus vel facilisis volutpat est.
          </p>
        </div>
      </div>
      <div className={s.title2}>Promoting Healthy Births</div>
      <div className={s.subContainer2}>
        <div className={s.quoteContainer}>
          <div className={s.quote}>
            {
              "“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. “"
            }
          </div>
        </div>
        <p>
          Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Arcu
          risus quis varius quam quisque id diam. Amet luctus venenatis lectus
          magna fringilla urna porttitor rhoncus dolor. Sed turpis tincidunt id
          aliquet risus feugiat in ante metus. Amet commodo nulla facilisi
          nullam vehicula. Facilisi cras fermentum odio eu feugiat pretium nibh
          ipsum consequat. Vel fringilla est ullamcorper eget nulla facilisi
          etiam dignissim diam. Sem viverra aliquet eget sit amet tellus cras
          adipiscing. Quis viverra nibh cras pulvinar. Orci a scelerisque purus
          semper eget duis at tellus. Maecenas accumsan lacus vel facilisis
          volutpat est.
        </p>
      </div>
      <p className={s.copyRight}>
        © 2023 Wise Woman Birth Services. All Rights Reserved.
      </p>
    </div>
  );
};

export default Bio;
