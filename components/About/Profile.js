import { useInView } from "framer-motion";
import { useRef } from "react";
import s from "../../styles/About/Profile.module.css";
const Profile = () => {
  const ref = useRef();
  const isInView = useInView(ref);
  return (
    <div className={s.container} ref={ref}>
      <div className={s.img}></div>
      <div
        className={s.title}
        style={{
          transform: isInView ? "none" : "translateX(-100vw)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        }}
      >
        <h1>{"Hi, I'm Lisa"}</h1>
        <div>
          <p>Sub-Title</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
