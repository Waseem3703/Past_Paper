import styles from "../CSS/Home_2.module.css";
import image_1 from "/src/assets/HomePageImage/image-1.webp";

function Home_2() {
  return (
    <div>
      <div className={styles.heading}>
        <h2 className={styles.h2_heading}>Unlock Past Papers with Ease </h2>
        <p className={styles.Para}>
          Access a curated collection of past exam papers and study resources to<br></br>
          help you prepare smarter and succeed with confidence.
        </p>
      </div>

      <div className={styles.Box_Layout}>
        <div className={styles.Right_Box}>
          <p>Unlock Past Papers with Ease</p>
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
export default Home_2;
