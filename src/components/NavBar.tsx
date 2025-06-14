import logo from "../assets/logo.webp";
import styles from "../CSS/NavBar.module.css";
import { Link, Outlet } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

function NavBar() {
  return (
    <main>
      <div className={styles.nav_div}>
        <div className={styles.nav_left}>
          <img className={styles.nav_logo} src={logo} alt="Logo" />

          <ul className={styles.nav_list}>
            <li className={styles.nav_item}>
              <Link className={styles.nav_links} to="/">
                Home
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link className={styles.nav_links} to="#">
                OOP Project
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link className={styles.nav_links} to="#">
                Subjects
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.Search_Container}>
          <input className={styles.Nav_Search} type="text"></input>
          <span>
            {" "}
            <IoIosSearch className={styles.Search_Icon} />
          </span>
        </div>

        <div>
          <button className={styles.Nav_Button}>Sign in</button>
        </div>
      </div>

      <Outlet />
    </main>
  );
}

export default NavBar;
