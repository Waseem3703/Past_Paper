import styles from "../CSS/Home_1.module.css";
import image_1 from "/src/assets/HomePageImage/image-1.webp";

function Home_1() {
  return (
    <div>
      <div className={styles.Box_Layout}>
        <div className={styles.Right_Box}>
          <h2 className={styles.h2_heading}>
            Access Past Papers<br/>with Ease
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
export default Home_1;