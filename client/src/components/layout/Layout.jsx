import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

import * as styles from "./Layout.css";

const Layout = () => {
  //Layout Component: Contains the Outlet, which will render the child components (Home or another page).

  //Outlet Component: When the user navigates to / (Home) or /brand page, the content of the Home or brand component is rendered inside the Outlet in the Layout component.
  return (
    <div className={styles.app}>
      <Header /> {/* Common header for all pages */}
      <div className={styles.appContent}>
        <Outlet /> {/* Child components will render here */}
      </div>
      <Footer /> {/* Common footer for all pages */}
    </div>
  );
};

export default Layout;

//Summary:
//Outlet is a special component that acts as a placeholder to render child routes inside a parent route.
//It allows nested routes to be displayed inside the parent layout while keeping shared components like headers and footers consistent.
//This structure keeps code organized and makes it easy to manage layouts and route-based content in React applications.
