import React from "react";
import * as styles from "./Contact.css";

function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.infoSection}>
        <h2 className={styles.infoTitle}>Contact Info</h2>
        <p className={styles.infoItem}>Melbourne</p>
        <p className={styles.infoItem}>Australian</p>
        <p className={styles.infoItem}>lorem@lipsum.com</p>
        <p className={styles.infoItem}>021666666666</p>
        <div className={styles.socialIcons}>
          <span className={styles.icon}>F</span>
          <span className={styles.icon}>A</span>
          <span className={styles.icon}>S</span>
          <span className={styles.icon}>I</span>
          <span className={styles.icon}>O</span>
          <span className={styles.icon}>N</span>
        </div>
      </div>
      <form className={styles.formSection}>
        <h2 className={styles.formTitle}>Send a Message</h2>
        <div className={styles.row}>
          <input
            className={styles.input}
            type="text"
            placeholder="First Name"
          />
          <input className={styles.input} type="text" placeholder="Last Name" />
        </div>
        <div className={styles.row}>
          <input
            className={styles.input}
            type="email"
            placeholder="Email Address"
          />
          <input
            className={styles.input}
            type="tel"
            placeholder="Mobile Number"
          />
        </div>
        <textarea
          className={styles.textArea}
          placeholder="Write your message here..."
        />
        <button className={styles.button} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
