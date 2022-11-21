import s from "../../styles/About/Profile.module.css";
const Profile = () => {
  return (
    <div className={s.container}>
      <div className={s.img}></div>
      <div className={s.title}>
        <h1>{"Hi, I'm Lisa"}</h1>
        <div>
          <p>Sub-Title</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
