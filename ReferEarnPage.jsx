import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Background from "../components/Background";
import styles from "./ReferEarnPage.module.css";

const ReferEarnPage = () => {
  return (
    <div className={styles.referEarnPage}>
      <div className={styles.background}>
        <div className={styles.overlay}>
          <div className={styles.heading1}>
            <div className={styles.navigateYourIdeal}>
              Navigate your ideal career path with tailored expert advice
            </div>
            <div className={styles.buttonmargin}>
              <div className={styles.button}>
                <a className={styles.contactExpert}>contact expert</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent4 />
      <FrameComponent3 />
      <FrameComponent2 />
      <div className={styles.referEarnPageChild} />
      <div className={styles.referEarnPageItem} />
      <FrameComponent1 />
      <FrameComponent />
      <Background />
    </div>
  );
};

export default ReferEarnPage;
