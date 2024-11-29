import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import * as styles from "./FashionPage.css";
import { Link } from "react-router-dom";
import dressesImage from "../assets/dom-hill-nimElTcTNyY-unsplash.jpg";
import accessoriesImage from "../assets/khaled-ghareeb--NyPn9up_7o-unsplash.jpg";
import shoesImage from "../assets/vladimir-fedotov-NJAFmCuIx1s-unsplash.jpg";

function FashionPage() {
  return (
    <Container className={styles.fashionPageContainer}>
      {/* Header Banner */}
      <header className={styles.headerBanner}>
        <h1>Discover Your Style</h1>
        <p>Shop the latest trends in fashion. Find your perfect look today!</p>
        <Button
          variant="dark"
          as={Link}
          to="/fashion/products"
          className={styles.shopButton}
        >
          Shop Fashion Now
        </Button>
      </header>

      {/* Categories */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Shop by Category</h2>
        <Row>
          <Col md={4}>
            <Card className={styles.categoryCard}>
              <Card.Img src={dressesImage} alt="Dresses " />
              <Card.Body>
                <Card.Title>Dresses Clothing</Card.Title>
                <Button as={Link} to="/fashion/products" variant="outline-dark">
                  View Collection
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className={styles.categoryCard}>
              <Card.Img src={accessoriesImage} alt="Accessories Clothing" />
              <Card.Body>
                <Card.Title>Accessories Fashion</Card.Title>
                <Button as={Link} to="/fashion/products" variant="outline-dark">
                  View Collection
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className={styles.categoryCard}>
              <Card.Img src={shoesImage} alt="Shoes" />
              <Card.Body>
                <Card.Title>Shoes Fashion</Card.Title>
                <Button as={Link} to="/fashion/products" variant="outline-dark">
                  View Collection
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default FashionPage;
