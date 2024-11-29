import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import * as styles from "./AboutUs.css";
import backgroundImages from "../assets/cleo-vermij-wSct4rrBPWc-unsplash.jpg";

function AboutUs() {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.imageSection}>
        <img
          src={backgroundImages}
          alt="Background"
          className={styles.backgroundImage}
        />
        <h1 className={styles.imageText}>ABOUT US</h1>
      </div>

      <Container className={styles.textContent}>
        <h2 className={styles.title}>A brand new way</h2>
        <Row>
          <Col md={6}>
            <p>
              Fashion is a powerful form of self-expression, allowing people to
              showcase their individuality, culture, and creativity through
              clothing and accessories. From high-end designer collections to
              everyday streetwear, fashion reflects societal trends, personal
              tastes, and even political statements. With each season, designers
              introduce fresh ideas, colors, and silhouettes, creating a
              constantly evolving landscape that keeps fashion exciting and
              inspiring. It's not just about following trends; fashion gives
              individuals the freedom to experiment with different styles, mix
              patterns, and define their unique identities.
            </p>
          </Col>
          <Col md={6}>
            <p>
              Beyond aesthetics, fashion has a significant impact on the global
              economy and environment. With the rise of fast fashion, consumers
              have access to affordable clothing, but this has also led to
              concerns about sustainability and ethical practices in the
              industry. As a result, many brands are shifting toward
              eco-friendly materials, fair labor practices, and sustainable
              production methods. This conscious approach to fashion encourages
              consumers to be mindful of their choices, prioritizing quality
              over quantity and investing in timeless pieces that last. In
              essence, fashion is more than just clothing—it's an art form, a
              business, and a way to make a positive impact.
            </p>
          </Col>
        </Row>
        <Button
          variant="primary"
          href="/fashion/"
          className={styles.shopButton}
        >
          SHOP NOW &gt;
        </Button>
      </Container>
    </div>
  );
}

export default AboutUs;
