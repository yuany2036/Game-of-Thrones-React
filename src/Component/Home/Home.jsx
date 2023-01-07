import styles from "./Home.module.scss";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <NavLink to="/characters">
          <img
            className={styles.img}
            src="https://imgs.search.brave.com/ddtL8YFXOhTpdwRttvYLo1zPI2hX3fSxvht2qMtOp9I/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDU1MzIw/NjYuanBn"
            alt="GoT Characters"
          />
        </NavLink>
        <h2 className={styles.title}>See characters</h2>
      </div>
      <div className={styles.imgContainer}>
        <NavLink to="/gallery">
          <img
            className={styles.img}
            src="https://imgs.search.brave.com/E1kKnO-lcvCx7MjSsbf0I0DdlBu08O3TP-irYE0CmBk/rs:fit:1200:1080:1/g:ce/aHR0cDovL3ZpZ25l/dHRlMS53aWtpYS5u/b2Nvb2tpZS5uZXQv/Z2FtZW9mdGhyb25l/cy9pbWFnZXMvNC80/MS9XaWxkZmlyZV9l/eHBsb3Npb24uanBn/L3JldmlzaW9uL2xh/dGVzdD9jYj0yMDE1/MDMyODIxMjcwMg"
            alt="GoT Gallery"
          />
        </NavLink>
        <h2 className={styles.title}>Browse the gallery</h2>
      </div>
    </div>
  );
};

export default Home;
