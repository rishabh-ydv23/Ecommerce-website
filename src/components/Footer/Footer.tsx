import styles from "./Footer.module.scss";
import {FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>


        <div className={styles.right}>
          <h3>About the Developers</h3>
          <ul className={styles.devList}>
            <li>
              <span>Rishabh</span>
              <div className={styles.socials}>
                <a href="https://www.linkedin.com/in/rishabhydv23" aria-label="Rishabh's LinkedIn"><FaLinkedinIn /></a>

                <a href="https://github.com/rishabh-ydv23" aria-label="Rishabh's GitHub"><FaGithub /></a>
              </div>
            </li>
            <li>
              <span>Shubh</span>
              <div className={styles.socials}>
                <a href="https://www.linkedin.com/in/shubh-singh-810583285/" aria-label="Shubh's LinkedIn"><FaLinkedinIn /></a>
                <a href="https://github.com/Shubh219" aria-label="Shubh's GitHub"><FaGithub /></a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
