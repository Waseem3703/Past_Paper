import styles from "./Layout.module.css";
import image_1 from "/src/assets/HomePageImage/image-1.webp";

function Layout() {
  return (
    <div>
      <div className={styles.Box_Layout}>
        <div className={styles.Right_Box}>
          <h2 className={styles.h2_heading}>
            Access COMSATS Past Papers with Ease
          </h2>
          <p className={styles.Para}>
            Explore a comprehensive collection of past papers for top subjects
            including OOP, Database Systems, Programming Fundamentals, DSA, AI,
            and Final Year Projects — all in one place to help you study smarter
            and succeed.
          </p>

          <div>
            <button className={styles.Nav_Button}>Sign in</button>
            <button className={styles.Nav_Button_Secondary}>Browse Papers</button>

          </div>
        </div>
        <div className={styles.Left_Box}>
          <div className={styles.home_img}>
            <img className={styles.home_img} src={image_1} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Layout;
