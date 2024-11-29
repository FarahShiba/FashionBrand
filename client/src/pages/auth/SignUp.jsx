import { useState, useRef } from "react";
import {
  Form,
  Button,
  Spinner,
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import authService from "../../services/authService";
import * as styles from "./SignUp.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function SignUp() {
  const { loginSaveUser } = useAuth();
  const navigate = useNavigate();
  const passwordConfirmRef = useRef();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const { username, email, password } = user;

  const handleTextChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password !== passwordConfirmRef.current.value) {
      alert("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const response = await authService.register(user);
      loginSaveUser(response.data);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <Container className={styles.container}>
      <Row>
        <Col md={6} className={styles.formSide}>
          <Card className={styles.formCard}>
            <Card.Body>
              <Card.Title className={styles.title}>Registration</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control
                    className={styles.input}
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={handleTextChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    className={styles.input}
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleTextChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    className={styles.input}
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleTextChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    className={styles.input}
                    type="password"
                    placeholder="Confirm Password"
                    ref={passwordConfirmRef}
                    required
                  />
                </Form.Group>
                <Button
                  className={styles.button}
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  ) : (
                    "Sign Up"
                  )}
                </Button>
                <div className={styles.socialButtons}>
                  <Button variant="light" className={styles.socialIcon}>
                    <FaGithub />
                  </Button>
                  <Button variant="light" className={styles.socialIcon}>
                    <FaInstagram />
                  </Button>
                  <Button variant="light" className={styles.socialIcon}>
                    <FaLinkedin />
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className={styles.welcomeSide}>
          <div className={styles.welcomeBack}>
            <h2 className="p-1">Welcome Back!</h2>
            <p>Already have an account?</p>
            <br />
            <Link to="/login" className={styles.loginButton}>
              Login Here
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
