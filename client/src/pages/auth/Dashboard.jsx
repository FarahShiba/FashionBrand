import useAuth from "../../hooks/useAuth";
import { Card, Button, Row, Col } from "react-bootstrap";
import * as styles from "./Dashboard.css"; // Import Vanilla Extract CSS

const Dashboard = () => {
  const { user, logout } = useAuth(); // Get user and logout function from context

  if (!user) {
    return (
      <div className={styles.dashboardContainer}>
        <Card className={`p-4 ${styles.errorCard}`}>
          <h4>Profile</h4>
          <div className="mt-3 mb-4 text-center text-danger">
            Cannot Retrieve User
          </div>
        </Card>
      </div>
    );
  }

  // Function to extract initials from the username
  const getInitials = (username) => {
    return username
      .split(" ")
      .map((name) => name[0].toUpperCase())
      .join("");
  };

  return (
    <div className={styles.dashboardContainer}>
      <Card className={`p-4 shadow-lg ${styles.profileCard}`}>
        <h4 className="text-center mb-4">Hi This Is My Profile</h4>
        <Row>
          <Col md={6}>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            {user.isAdmin && (
              <p>
                <strong>Admin Status:</strong> Hello Admin - nice to see you
                here
              </p>
            )}
          </Col>
          <Col md={6}>
            <div className={`text-center ${styles.avatar}`}>
              {getInitials(user.username)}
            </div>
          </Col>
        </Row>
        <div className="mt-4 text-center">
          <Button variant="dark" onClick={logout} className="px-5">
            Log Out
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
