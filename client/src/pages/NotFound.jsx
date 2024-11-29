// src/pages/NotFound.jsx
import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as styles from "./NotFound.css";
import NotFoundImage from "../assets/404.svg";

function NotFound() {
  return (
    <Container className={styles.notFoundContainer}>
      <div className={styles.imageWrapper}>
        <img
          src={NotFoundImage}
          alt="404 - Page Not Found"
          className={styles.image}
        />
      </div>
      <h1 className={styles.title}>404</h1>
      <p className={styles.subtitle}>Page not found</p>
      <Button as={Link} to="/" variant="primary" className={styles.backButton}>
        Back to Home
      </Button>
    </Container>
  );
}

export default NotFound;
