import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <ul className={styles.navbar}>
      <li className={styles.logo}>
        <NavLink to="/">
          <div className={styles.img}></div>
        </NavLink>
      </li>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/characters">Characters</NavLink>
      </li>
      <li>
        <NavLink to="/gallery">Gallery</NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
