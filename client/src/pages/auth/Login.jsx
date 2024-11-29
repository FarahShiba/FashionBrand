import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Form,
  Spinner,
  Button,
  Container,
  Card,
  Row,
  Col,
} from "react-bootstrap";

import * as styles from "./Login.css";
import authService from "../../services/authService";
import useAuth from "../../hooks/useAuth";

function Login() {
  const { loginSaveUser } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const { email, password } = user;

  const handleTextChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await authService.login(user);
      loginSaveUser(response.data);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <Container className={styles.container}>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className={styles.form}>
            <Card.Body>
              <Card.Title className={styles.title}>Login</Card.Title>
              <Form onSubmit={handleSubmit}>
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
                    "Login"
                  )}
                </Button>
              </Form>
              <p className={styles.footerText}>
                Don't have an account?{" "}
                <Link to="/signup" className={styles.loginLink}>
                  Sign Up
                </Link>{" "}
                now!
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className={styles.welcomeSection}>
          <h2 className={styles.welcomeTitle}>Welcome Back!</h2>
          <p className="p-2">Already have an account?</p>
          <Link to="/signup">
            <Button className={styles.loginButton}>Sign Up Here</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
