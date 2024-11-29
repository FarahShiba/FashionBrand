import { Navbar, Container, Nav, Button, Badge } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import TuLink from "../common/TuLink";
import * as styles from "./Header.css";
import { RiShoppingCartFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import fashionLogo from "../../assets/noun-fashion-2752721.png";
import { useCart } from "../../context/CartContext";

const Header = () => {
  const { user, logout } = useAuth();
  const { cart } = useCart();

  return (
    <Navbar className={styles.header} variant="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className={styles.brand}>
          <img
            src={fashionLogo}
            alt="Fashion Store Logo"
            className={styles.logoImage}
          />
          Fashion Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Main navigation links */}
          <Nav className={styles.navLinks}>
            <Nav.Link as={Link} to="/about" className={styles.link}>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/fashion" className={styles.link}>
              Fashion
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className={styles.link}>
              Contact Us
            </Nav.Link>
          </Nav>

          {/* Auth and cart buttons */}
          <Nav className="ms-auto ">
            {!user && <TuLink to="/signup">Sign Up</TuLink>}
            {!user && <TuLink to="/login">Log In</TuLink>}
            {user && <TuLink to="/dashboard">Dashboard</TuLink>}
            {user && (
              <Button
                className={styles.authLink}
                variant="outline-dark"
                onClick={logout}
              >
                Logout
              </Button>
            )}
            <Button
              as={Link}
              to="/cart"
              variant="outline-dark"
              className={styles.cartButton}
            >
              <RiShoppingCartFill />
              {cart.length > 0 && (
                <Badge bg="secondary" className={styles.cartBadge}>
                  {cart.length}
                </Badge>
              )}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
