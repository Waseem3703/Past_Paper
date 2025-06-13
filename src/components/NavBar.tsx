import logo from "../assets/logo.webp";
import styles from "../CSS/NavBar.module.css";
import { Link, Outlet } from "react-router-dom";
function NavBar() {
  return (
    <main>
      <div className={styles.nav_div}>
        <img className={styles.nav_logo} src={logo} />
        <ul className={styles.nav_list}>
          <li className={styles.nav_item}>
            <Link className={styles.nav_links} to="/">Home</Link>
          </li>
          <li className={styles.nav_item}>
            <Link className={styles.nav_links} to="#">OOP Project</Link>
          </li>
          <li className={styles.nav_item}>
            <Link className={styles.nav_links} to="#">Subjects</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </main>
  );
}

export default NavBar;
