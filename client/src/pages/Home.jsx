import { Fragment } from "react";
import * as styles from "./Home.css";
import TuBox from "../components/common/TuBox";
import shirtImage from "../assets/alyssa-strohmann-TS--uNw-JqE-unsplash.jpg";

const Home = () => {
  return (
    <Fragment>
      <div className={styles.heroSection}>
        {/* Left section for text */}
        <div className={styles.heroText}>
          <h5>OUR BESTSELLERS</h5>
          <h1>Latest Arrivals</h1>
          <TuBox
            title="Official Store for Fashion Store"
            content="Discover our latest fashion trends. Shop exclusive dresses, scarves, and accessories."
          />
          <a href="/fashion" className={styles.shopNowLink}>
            Shop Now
          </a>
        </div>

        {/* Right section for the image */}
        <div className={styles.heroImage}>
          <img src={shirtImage} alt="Fashion Collection" />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
